# jourplan
# js 표준 스타일 규약
 - 개발시에 끝에 ; 붙이지 않기.
 - == 대신 === 쓰기.
# 추가할 부분
 - 로그인할때 토큰 생성
 
# 2018-09-26
 - 회원정보 등록 추가.
 - password 해시 값으로 저장. SHA-512 해시 후 SALT 추가하여 password 변환 후 저장.

hash 추출 함수 추가.
```
function getHash (pw) {
    //const salt = '::EVuCM0QwfI48Krpr'
    const salt = Math.round((new Date().valueOf() * Math.random())) + ""
    const crypto = require('crypto')
    const hashsum = crypto.createHash('sha512')
    hashsum.update(pw + salt)
    return hashsum.digest('hex')
}
```

# 2018-09-25
 - React -> node js 로 rest api (get, post) 호출하기.
 - React에서 dataset 배열, 단일행 넘기고 nodejs에서 받기.
 
 EX)
 배열 dataset, 단일행 dataset 넘기기.
 
 React
 ```
 constructor(props) {  
        super(props);
    this.state = {
            join: {
                email: '',              //회원가입 이메일
                id: '',                 //회원가입 아이디
                password: '',           //회원가입 비밀번호
                passwordConfirm: '',    //회원가입 비밀번호 확인
            }, // login ds
            joins: [{  a: ''
                     , b: ''
                     , c: ''
                   }]
        };
    }
    
 let stJoin = this.state.join
 let stJoins = this.state.joins
 stJoins.push({
       a: '첫번째a'
      ,b: '첫번째b'
      ,c: '첫번째c'
  }) 
  stJoins.push({
      a: '두번째a'
     ,b: '두번째b'
     ,c: '두번째c'
 })
 
 fetch('/member/memInfo',{
            method: 'post',
            dataType: 'json',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // stJoins 테스트 배열 dataset 보낼때
            // body: JSON.stringify(stJoins)
            // body: JSON.stringify(this.state.joins)
            // stJoin 테스트 단일행 dataset 보낼때
            // body: JSON.stringify(stJoin)
            // body: JSON.stringify(this.state.join)
        })
```
nodejs
```
exports.regMemInfo = function(req, res){ 
  //배열 받기.
  console.log('memInfo 00 == ' + JSON.stringify(req.body))
  console.log('memInfo 11 == ' + req.body[0].a)
  console.log('memInfo 22 == ' + req.body[1].a)
  //단일행 받기.
  console.log('memInfo email == ' + req.body.email)
  console.log('memInfo id == ' + req.body.id)
}
``` 

# 2018-09-16
 - 비지니스로직 패키지구조 변경.
 app.js에서 controller.js를 호출하고 
 서비스 로직 흐름
 app.js > controller.js > routes안에 있는 service js파일 호출(routes > member > join.js) > 쿼리 호출 (resource < member > join.js)
 
```
- server
  > resource
    > member
      > login.js
      > join.js
    > plan
  > routes
    > member
      > login.js
      > join.js
    > plan
    > controller.js
  > app.js
```
app.js 에서 controller를 호출한다.
```
let apiController = require('./routes/controller')
app.use('/', apiController)
```
controller.js에서 route 나누기.
```
const router = require('express').Router()
//member
const routJoin = require('./member/join')
const routLogin = require('./member/login')

//rest api 호출
router.post('/member/memInfo', routJoin.regMemInfo)     //회원등록
router.get('/member/memInfo', routLogin.getMemInfo)     //회원조회
```
routes 호출
```
exports.regMemInfo = function(req, res){ 
	let sJoin = req.body
	dbJoin.regMemInfo(sJoin,(bb) =>{
		console.log("end")
	})
}
```
resource 호출
```
exports.regMemInfo = function(sJoin, callback){ 
    console.log('resource 등록 JOIN');
    console.log('resource == ' + sJoin.email);
    
    dbconnection.query(
        "SELECT *                           "+ 
        "  FROM MEM_INFO_MNG                "+
        " WHERE MEM_INFO_ID = '99999999'    "
        , (err, rows) => {
            if(err) throw err
            callback(rows)
            // res.send(rows)
	})
}
```

# 2018-09-10
 - 새로고침시 에러 처리.
 app.js 수정
 
 기존에 
```
const cSetting = express.static(__dirname + "/../public/views/setting.html")	//setting
app.use('/settingFriend', cSetting)
app.use('/settingFriendReq', cSetting)
```
이런식으로 처리했는데 settingFriend랑 settingFriendReq에서 새로고침 했을때 같은 html을 바라보도록
html 셋팅을 해줘야하는데 소스가 길어지니
```
const cSetting = express.static(__dirname + "/../public/views/setting.html")	//setting
app.use('/setting/settingFriend', cSetting)
app.use('/setting/settingFriendReq', cSetting)
```
이런식으로 변경 후 setting이 들어오면 자동적으로 setting.html을 바라보도록 수정. (나머지 main, plan, member도 처리해야함)
 ```
app.get('*', (req, res, next) => {
	if (req.path.split('/')[1] === 'setting') {
		res.sendFile(path.resolve(__dirname, "../public/views/setting.html"))
	}
})
 ```
 
 
