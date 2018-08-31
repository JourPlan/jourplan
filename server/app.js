import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import path from 'path';

// let dbconfig = require(__dirname+'/../server/config/db-config.json');
// let connection = mysql.createConnection(dbconfig);

const app = express();
const port = 3000;

app.use('/', express.static(__dirname + "/../public"));
// app.use('/public', express.static('./public'))
// app.use('/login', express.static('./public'))
// app.use('/users', express.static('./public'))
// app.use('/timeline', express.static('./public'))
// app.use('/', express.static('./public'))


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/man', (req, res) =>{
	
	console.log('man in 211');
// 	connection.query("SELECT * FROM mem_info_mng where MEM_INFO_ID = '99999999'", (err, rows) => {
// 		if(err) throw err;

// 		res.send(rows);
// 	});
// });

let main = require("./routes/main/man");
//여기서 / 이렇게 해놓으면 main에 /man을 찾는다 
//하지만 /man이렇게 해놓으면 /man/man을 찾는다.
app.use('/',main); 

const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});