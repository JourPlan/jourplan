'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/************************************* 
 *	변수 선언 
*************************************/
var app = (0, _express2.default)(); /************************************* 
                                     *	공통 import 선언 
                                    *************************************/

var port = 3000;

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

/************************************* 
 *	화면 react-router-dom 선언
*************************************/
var cMember = _express2.default.static(__dirname + "/../public"); //member
var cSetting = _express2.default.static(__dirname + "/../public/views/setting.html"); //setting
var cMain = _express2.default.static(__dirname + "/../public/views/main.html"); //main
var cPlan = _express2.default.static(__dirname + "/../public/views/plan.html"); //plan	

//## member
app.use('/', cMember);
app.use('/login', cMember);
app.use('/join', cMember);
app.use('/passwordReset', cMember);

//## setting
app.use('/setting', cSetting);
app.use('/setting/settingFriend', cSetting);
app.use('/setting/settingFriendReq', cSetting);
app.use('/setting/settingPassChg', cSetting);
app.use('/setting/settingProfile', cSetting);

//## main
app.use('/main', cMain);

//## plan
app.use('/plan', cPlan);
app.use('/plan/planList', cPlan);
app.use('/plan/planDetail', cPlan);
app.use('/plan/planSave', cPlan);

/************************************* 
 *	api 선언
*************************************/
//여기서 / 이렇게 해놓으면 main에 /man을 찾는다 
//하지만 /man이렇게 해놓으면 /man/man을 찾는다.
//RestFul Api Routes로 나눠서 처리.
var apiController = require('./routes/controller');
// let apiMain = express.static(path.join(__dirname, 'routes/main'))
// let apiMain = express.static(__dirname + "/routes/main")
// let apiMember = require('./routes/member/join')


app.use('/', apiController);

// app.use('/member',apiMember)
/************************************* 
 *	화면 새로고침시에 오류 안나도록 수정. 맨 아래 써야함.
 *  호출되는 html 파일에서 절대 경로로 해야힘.
 * ex) ../js/plan.js => /js/plan.js
*************************************/
app.get('*', function (req, res, next) {
	console.log('path ===== ' + req.path.split('/')[1]);
	if (req.path.split('/')[1] === 'public') {
		return next();
	}
	if (req.path.split('/')[1] === 'setting') {
		res.sendFile(_path2.default.resolve(__dirname, "../public/views/setting.html"));
	} else if (req.path.split('/')[1] === 'main') {
		res.sendFile(_path2.default.resolve(__dirname, "../public/views/main.html"));
	} else if (req.path.split('/')[1] === 'plan') {
		res.sendFile(_path2.default.resolve(__dirname, "../public/views/plan.html"));
	}
});

app.use(function (error, req, res, next) {
	res.json({ message: error.message });
});
/************************************* 
 *	Express server Start
*************************************/
var server = app.listen(port, function () {
	console.log('Express listening on port', port);
});