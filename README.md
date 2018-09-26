# jourplan
# js 표준 스타일 규약
 - 개발시에 끝에 ; 붙이지 않기.
 - == 대신 === 쓰기.
# 2018-09-26
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
