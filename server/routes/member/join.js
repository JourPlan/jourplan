const dbLogin = require('../../resource/member/login.js')
const dbJoin = require('../../resource/member/join.js')

/************************************* 
 *	join method 등록
 *  조회 = get
 *  수정 = set
 *  등록 = reg
 *  삭제 = del
*************************************/


/************************************* 
 *  regMemInfo
 *  회원정보 등록
*************************************/
exports.regMemInfo = function(req, res){ 
	
	// console.log('=== memInfo === ' + req.query.stJoins)
	// console.log('memInfo 11 == ' + req.body[0].a)

	console.log('memInfo email == ' + req.body.email)
	console.log('memInfo id == ' + req.body.id)
	//regmeminfo test
	let sJoin = req.body
	dbJoin.regMemInfo(sJoin,(bb) =>{
		console.log("end")
	})

	let sMemInfoId = "99999999"
	dbLogin.getMemInfo(sMemInfoId, (aa) => {
		console.log("regAaa1 == " + aa[0].MEM_INFO_ID)
		console.log("regAaa2 == " + JSON.stringify(aa))
		
		res.send(aa)
	}) 

}