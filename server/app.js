/* 공통 import 선언 */
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

/* 변수 선언 */
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


/* 화면 react-router-dom 선언. */
const cMember = express.static(__dirname + "/../public")								//member
const cSetting = express.static(__dirname + "/../public/views/setting.html")	//setting
const cMain = express.static(__dirname + "/../public/views/main.html")				//main
const cPlan = express.static(__dirname + "/../public/views/plan.html")	

//## member
app.use('/', cMember)
app.use('/login', cMember)
app.use('/join', cMember)
app.use('/passwordReset', cMember)

//## setting
app.use('/settingFriend', cSetting)
app.use('/settingFriendReq', cSetting)
app.use('/settingPassChg', cSetting)
app.use('/settingProfile', cSetting)

//## main
app.use('/main', cMain)

//## plan
app.use('/planList', cPlan)
app.use('/planDetail', cPlan)
app.use('/planSave', cPlan)



/* api 선언 */
//여기서 / 이렇게 해놓으면 main에 /man을 찾는다 
//하지만 /man이렇게 해놓으면 /man/man을 찾는다.
//RestFul Api Routes로 나눠서 처리.
let main = require("./routes/main/man")
app.use('/',main)


/* Express server Start */
const server = app.listen(port, () => {
	console.log('Express listening on port', port)
})