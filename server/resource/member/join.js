
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
 *  getHash 
 *  해시(sha512) 추출하기
*************************************/
function getHash (pw) {
    //const salt = '::EVuCM0QwfI48Krpr'
    const salt = Math.round((new Date().valueOf() * Math.random())) + ""
    const crypto = require('crypto')
    const hashsum = crypto.createHash('sha512')
    hashsum.update(pw + salt)
    return hashsum.digest('hex')
}

/************************************* 
 *  regMemInfo
 *  회원정보 등록 query
*************************************/
exports.regMemInfo = function(sJoin, callback){ 
    console.log('resource 등록 JOIN');
    console.log('resource == ' + sJoin.email);
    // let lEmail = sJoin.email
    // let lId = sJoin.id
    // let lPw = getHash(sJoin.password)
    let aJoin = [
                    sJoin.email
                ,   sJoin.id
                ,   getHash(sJoin.password)
                ]
    
    console.log('insert start')

    dbconnection.query(
         "    INSERT INTO MEM_INFO_MNG                  "+
         "    (                                         " +  
         "          MEM_INFO_ID 	                    "+
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
         "    )                                         "+
         "    VALUES                                    "+
         "    (                                         "+
         "        ( SELECT A.memInfoId                                    "+
         "            FROM                                     "+
         "                  ( SELECT LPAD((IFNULL(MAX(MEM_INFO_ID),0) + 1),8,0) memInfoId  "+
         "                      FROM MEM_INFO_MNG            "+
         "                  ) A                             "+
         "        )                                         "+
         "        ,	? 	"+
         "        ,	? 	"+
         "        ,	? 	"+
         "        ,	''  "+
         "        ,	''  "+
         "        ,	''  "+
         "        ,	NOW()  "+
         "        ,	NOW()  "+
         "        ,	NOW()  "+
         "        ,	''     "+
         "        ,	NOW()  "+
         "        ,	''     "+
         "    )                                        "
        // , [
        //         lEmail
        //     ,   lId
        //     ,   lPw
        //     ]
        , aJoin
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