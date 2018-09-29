
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
    let aMemInfo = [
        req.email
    ,   req.id
    ]

	dbconnection.query(
        " SELECT                                        "+ 
        "           MEM_INFO_ID 	                    "+
        "        ,	MEM_EMAIL 		                    "+
        "        ,	MEM_INFO_NM 	                    "+
        "        ,	MEM_INFO_PW 	                    "+
        "        ,	MEM_DIV 		                    "+
        "        ,	SEX 			                    "+
        "        ,	MEM_CNTRY 		                    "+
        "        ,	LATY_CONN_DT 	                    "+
        "        ,	LAST_CONN_DT 	                    "+
        "        ,	REG_DT 			                    "+
        "        ,	REG_MEM_ID 		                    "+
        "        ,	UPD_DT 			                    "+
        "        ,	UPD_MEM_ID 		                    "+
        "  FROM MEM_INFO_MNG                            "+
        " WHERE 1=1                                     "+
        "   AND (MEM_EMAIL = ? OR MEM_INFO_NM = ?)      "
        , aMemInfo
        , (err, memInfo) => {
            if(err) throw err
            callback(memInfo)
	})
}