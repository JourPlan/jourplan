const router = require('express').Router()

/************************************* 
 *	js 경로 선언
*************************************/
//main
const routMan = require('./main/man')

//member
const routJoin = require('./member/join')
const routLogin = require('./member/login')

/************************************* 
 *	router api 선언
*************************************/
//main
router.get('/main/man', routMan.man)

//member
router.post('/member/memInfo', routJoin.regMemInfo)        //회원등록
router.get('/member/memInfo', routLogin.getMemInfo)     //회원조회


module.exports = router;