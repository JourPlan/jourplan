//공통 import 선언
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

//변수 선언
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//화면 react-router-dom 선언.
//## member
app.use('/', express.static(__dirname + "/../public"));
app.use('/login', express.static(__dirname + "/../public"));
app.use('/join', express.static(__dirname + "/../public"));

//## main
app.use('/main', express.static(__dirname + "/../public/views/main/main.html"));

// app.use('/', express.static('./public'))




//여기서 / 이렇게 해놓으면 main에 /man을 찾는다 
//하지만 /man이렇게 해놓으면 /man/man을 찾는다.
//RestFul Api Routes로 나눠서 처리.
let main = require("./routes/main/man");
app.use('/',main); 


//Express server Start
const server = app.listen(port, () => {
	console.log('Express listening on port', port);
});