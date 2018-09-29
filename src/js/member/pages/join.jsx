/* 기본 import */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../css/join.css'
import {Redirect, Link} from 'react-router-dom'
import 'whatwg-fetch';

/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * Join
 *************************/

class Join extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            path: '',   //이동할 경로
            join: {
                email: '',              //회원가입 이메일
                id: '',                 //회원가입 아이디
                password: '',           //회원가입 비밀번호
                passwordConfirm: '',    //회원가입 비밀번호 확인
            }, // login ds
            joins: [{  a: ''
                     , b: ''
                     , c: ''
                   }],
            mans:[]
        };
    }

    componentDidMount(){
        console.log("aaaaaaaaa11")
		fetch('/member/memInfo',{
			method: 'get',
			dataType: 'json',
			headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		})
		.then((response) => response.json())
		.then((responseData) => {
            console.log("hi")
			this.setState({mans: responseData})
		})
		.catch((error)=>{
			console.log('Error fetching man',error)
		});
    }
    
    /*************************
     * 사용자 정의 함수
     *************************/
    

    //회원가입 버튼 클릭
    clickJoin(e) {
        let joinEmail           = this.state.join.email
        const joinId              = this.state.join.id
        const joinPassword        = this.state.join.password
        const joinPasswordConfirm = this.state.join.passwordConfirm

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
       this.setState({
        joins: stJoins
       })
        fetch('/member/memInfo',{
            method: 'post',
            dataType: 'json',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify('1234')
            // body: JSON.stringify(
            //     {
            //         email : 'lswwkd@naver.com'
            //         ,id : 'Friday'
            //     })

            // stJoins 테스트
            // body: JSON.stringify(stJoins)
            // body: JSON.stringify(this.state.joins)
            // stJoin 테스트
            // body: JSON.stringify(stJoin)
            body: JSON.stringify(this.state.join)
        }).then((response) => response.json())
        .then((responseData) => {
            console.log('ddddddd')
            console.log('responseData1 === '+ responseData.message)
            this.setState({mans: responseData})
        })
        .catch((error)=>{
            alert(error)
            console.log('Error fetching man',error)
        });
        
        // if (loginId == 'admin' && loginPassword == 'admin'){
        //     location.href='../main/main.html';
        // } else {
        //     alert("아이디 비밀번호를 확인하세요.");
        // }
    }

    // 로그인 버튼 클릭
    clickLogin(e) {
        
        // location.href='./login.html';
        this.setState({path: '/login'})
    }

    //로그인 페이지(member메인 페이지)로 이동
    clickMemberMain(e) {
        // location.href='./login.html';
        this.setState({path: '/login'})
    }

    // 값변경 이벤트
    onChangeHandler(e) {
        let _state = this.state.join;

        // console.log(_state);
        // console.log([e.target.name]);
        // console.log(e.target.value);

        _state[[e.target.name]] = e.target.value;

        // console.log(_state);

        this.setState({
            join: _state
        });
    }

    /*************************
     * render
     *************************/

    render() {
        //image 선언
        const mApple = require('../../../images/apple.png');
        const mGoogle = require('../../../images/google.png');
        
        if (this.state.path) {
            return <Redirect to={this.state.path} />
        }

        

        return (
            // <!------ 뒷배경 이미지 ------>
            <div className="back-box-img">
                {/* <!------ join box ------> */}
                <div className="join-center-box">
                    {/* <!------ join back ------> */}
                    <div className="join-center-back">
                        {/* <!------ join 헤더 글씨부분 ------> */}
                        <div className="login-header">
                            <a href="javascript:;" onClick={(e) => this.clickMemberMain(e)}>
                                <h1>
                                    JourPlan
                                </h1>
                            </a>
                        </div>
                        
                        {/* <!------ join 아이디,비번 영역 ------> */}
                        <div className="join-body">
                            <input type="email" name="email" className="form-control login-id" value={this.state.join.email} placeholder="이메일 주소" onChange={(e) => { this.onChangeHandler(e) }} />
                            
                            <input type="text" name="id" className="form-control login-password" value={this.state.join.id} placeholder="사용자 ID" onChange={(e) => { this.onChangeHandler(e) }} />
                            <input type="password" name="password" className="form-control login-password" value={this.state.join.password} placeholder="비밀번호" onChange={(e) => { this.onChangeHandler(e) }} />
                            <input type="password" name="passwordConfirm" className="form-control login-password" value={this.state.join.passwordConfirm} placeholder="비밀번호 확인" onChange={(e) => { this.onChangeHandler(e) }} />
                            <button type="button" className="form-btn bg-olive login-btn" onClick={(e) => this.clickJoin(e)}>회원 가입</button>
                            <hr className="login-bar" />
                            <div className="login-find-info">
                                <input id="join-chk" type="checkbox" className="input_chk" />
                                <label className="join-label" htmlFor="join-chk">
                                        &nbsp;JourPlan의 약관 및 개인 정보 동의합니다.
                                </label>
                            </div>
                        </div>
                        <div className="join-bottom">
                            <p className="join-p">
                                이미 가입하셨나요?
                                <a href="javascript:;" onClick={(e) => this.clickLogin(e)} >&nbsp;로그인</a>
                            </p>
                                
                        </div>
                        {/* <!------ login app다운로드 영역 ------> */}
                        {/* <div className="join-footer">
                            <p className="login-p-down">앱을 다운로드 하세요.</p>
                            <div className="login-app">
                                <a className="login-app-a" href="#">
                                    <img className="login-app-img" alt="App store에서 이용가능" src={mApple} />
                                </a>
                                <a className="login-app-a" href="#">
                                    <img className="login-app-img" alt="Google Play에서 이용가능" src={mGoogle} />
                                </a>
                            </div>
                        </div> */}


                        
                        <div className="join-footer">
                            {
                                this.state.mans.length > 0 ?
                                    this.state.mans.map( (man, index) => (
                                        <h1 key={index}>
                                            {man.MEM_INFO_ID}
                                            {man.MEM_EMAIL}
                                        </h1>
                                        )
                                    )
                                    :
                                    <h1>조회한 결과가 없습니다.</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

Join.propTypes = {
    clickJoin: PropTypes.func,
    clickLogin: PropTypes.func,
    onChangeHandler: PropTypes.func,
    clickMemberMain: PropTypes.func,
};

Join.defaultProps = {
    clickJoin: () => { },
    clickLogin: () => { },
    onChangeHandler: () => { },
    clickMemberMain: () => { },
};

/* ReactElements 컴파일 */
// const root = document.querySelector('div#mainDiv');
// render(<Join/>, root);

export default Join;