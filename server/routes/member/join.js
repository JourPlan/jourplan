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
exports.regMemInfo = function(req, res, next){ 
	
	// console.log('=== memInfo === ' + req.query.stJoins)
	// console.log('memInfo 00 == ' + JSON.stringify(req.body))
	// console.log('memInfo 11 == ' + req.body[0].a)
	// console.log('memInfo 22 == ' + req.body[1].a)

	console.log('memInfo email == ' + req.body.email)
	console.log('memInfo id == ' + req.body.id)
	let sJoin = req.body

	dbLogin.getMemInfo(sJoin, (memInfo) => {
		if (memInfo.length === 1) {
			console.log("존재함.")
			// return next(new Error('이메일 또는 사용자ID가 존재합니다.'))
			// res.send(new Error('이메일 또는 사용자ID가 존재합니다.'))
			// throw new Error('이메일 또는 사용자ID가 존재합니다.')
			next(new Error('이메일 또는 사용자ID가 존재합니다.'))
		} else {
			console.log("존재안함.")

		}
	})
	// dbJoin.regMemInfo(sJoin,(bb) =>{
	// 	console.log("end")
	// })

	// let sMemInfoId = "99999999"
	// dbLogin.getMemInfo(sMemInfoId, (aa) => {
	// 	console.log("regAaa1 == " + aa[0].MEM_INFO_ID)
	// 	console.log("regAaa2 == " + JSON.stringify(aa))
		
	// 	res.send(aa)
	// }) 

}