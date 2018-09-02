'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let dbconfig = require(__dirname+'/../server/config/db-config.json');
// let connection = mysql.createConnection(dbconfig);

var app = (0, _express2.default)();
var port = 3000;

app.use('/', _express2.default.static(__dirname + "/../public"));
// app.use('/public', express.static('./public'))
// app.use('/login', express.static('./public'))
// app.use('/users', express.static('./public'))
// app.use('/timeline', express.static('./public'))
// app.use('/', express.static('./public'))


app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// app.get('/man', (req, res) =>{

console.log('man in 211');
// 	connection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999999'", (err, rows) => {
// 		if(err) throw err;

// 		res.send(rows);
// 	});
// });

var main = require("./routes/main/man");
//여기서 / 이렇게 해놓으면 main에 /man을 찾는다 
//하지만 /man이렇게 해놓으면 /man/man을 찾는다.
app.use('/', main);

var server = app.listen(port, function () {
	console.log('Express listening on port', port);
});