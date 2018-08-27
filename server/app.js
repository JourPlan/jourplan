import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import path from 'path';


let dbconfig = require(__dirname+'/../server/config/db-config.json');
let connection = mysql.createConnection(dbconfig);

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


let main = require("./routes/main/man");
app.use('/man',main);

const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});