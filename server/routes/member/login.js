const dbLogin = require('../../resource/member/login.js')

/************************************* 
 *	login method 등록
 *  조회 = get
 *  수정 = set
 *  등록 = reg
 *  삭제 = del
*************************************/


/************************************* 
 *  getMemInfo
 *  회원정보 조회
*************************************/
exports.getMemInfo = function(req, res){ 
    console.log("routes login111")
    let sMemInfo = "lswwkd@naver.com"
	dbLogin.getMemInfo(sMemInfo, (aa) => {
		console.log("length === " + aa.length)
		// console.log("aa1 == " + aa[0].MEM_INFO_ID)
		// console.log("aa2 == " + JSON.stringify(aa))
		
		res.send(aa)
	}) 

}