/* 기본 import */

import React, { Component }  from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'whatwg-fetch'
import '../../../css/login.css'
import { hot } from 'react-hot-loader'
import {Redirect, Link} from 'react-router-dom'

/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * Login
 *************************/

class Login extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            path: '',   //이동할 경로
            login: {
                id: '',            //로그인 아이디
                password: '',      //로그인 패스워드
            }, // login ds
        };
        this.enterKeyPress = this.enterKeyPress.bind(this);
        this.clickLogin = this.clickLogin.bind(this);
    }

    /*************************
     * 사용자 정의 함수
     *************************/
    
    enterKeyPress(e) {
        if(e.key == 'Enter'){
          console.log('enter press here! ');
          this.clickLogin();
        }
    }

     //비밀번호 찾기 버튼 클릭
    clickPasswordSearch(e) {
        location.href='./passwordReset.html';
    }

    //회원가입 버튼 클릭
    clickJoin(e) {
        location.href='./join.html';
    }

    // 로그인 버튼 클릭
    clickLogin(e) {
        const loginId       = this.state.login.id;
        const loginPassword = this.state.login.password;

        if (loginId == 'admin' && loginPassword == 'admin'){
            location.href='/main';
            // this.setState({path: '/main'})
        } else {
            alert('아이디 비밀번호를 확인하세요.')
        }
    }

    //로그인 페이지(member메인 페이지)로 이동
    clickMemberMain(e) {
        location.href='./login.html';
    }

    // 값변경 이벤트
    onChangeHandler(e) {
        let _state = this.state.login;

        // console.log(_state);
        // console.log([e.target.name]);
        // console.log(e.target.value);

        _state[[e.target.name]] = e.target.value;

        // console.log(_state);

        this.setState({
            login: _state
        });
    }
    

    
    /*************************
     * render
     *************************/

    render() {
        if (this.state.path) {
            return <Redirect to={this.state.path} />
        }
        return (
            <div className="back-box-img">
                <div className="login-center-box">
                    <div className="login-center-back">
                        <div className="login-header">
                            <a href="javascript:;" onClick={(e) => this.clickMemberMain(e)}>
                                <h1>
                                    JourPlan
                                </h1>
                            </a>
                        </div>
                        <div className="login-body">
                            <input type="email" name="id" className="form-control login-id" value={this.state.login.id} onChange={(e) => { this.onChangeHandler(e) }} onKeyPress={this.enterKeyPress} placeholder="사용자 ID 또는 이메일" />
                            <input type="password" name="password" className="form-control login-password" value={this.state.login.password} onChange={(e) => { this.onChangeHandler(e) }} onKeyPress={this.enterKeyPress} placeholder="비밀번호" />
                            <button type="button" className="form-btn bg-olive login-btn" onClick={(e) => this.clickLogin(e)} >로그인</button>
                            <hr className="login-bar" />
                            <div className="login-find-info">
                                <a href="javascript:;" onClick={(e) => this.clickPasswordSearch(e)} >비밀번호 찾기</a>
                                <span className="bar">&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                                <a href="javascript:;" onClick={(e) => this.clickJoin(e)} >회원가입</a>
                            </div>
                        </div>
                        <div className="login-footer">
                            <p className="login-p-down">앱을 다운로드 하세요.</p>
                            <div className="login-app">
                                <a className="login-app-a" href="#">
                                    <img className="login-app-img" alt="App store에서 이용가능" src="../../../assets/images/apple.png" />
                                </a>
                                <a className="login-app-a" href="#">
                                    <img className="login-app-img" alt="Google Play에서 이용가능" src="../../../assets/images/google.png" />
                                </a>
                            </div>
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

Login.propTypes = {
    clickPasswordSearch: PropTypes.func,
    clickJoin: PropTypes.func,
    clickLogin: PropTypes.func,
    onChangeHandler: PropTypes.func,
    clickMemberMain: PropTypes.func,
};

Login.defaultProps = {
    clickPasswordSearch: () => { },
    clickJoin: () => { },
    clickLogin: () => { },
    onChangeHandler: () => { },
    clickMemberMain: () => { },
};

/* ReactElements 컴파일 */
// export default Login;
export default hot(module)(Login);

// const root = document.querySelector('div#mainDiv');
// const root = document.getElementById("mainDiv")
// React.render(
//         <Login/>, root);

// if (module.hot) {
//     module.hot.accept('./Login', () => {
//          ReactDOM.render(
//              <AppContainer>
//                 <Login/>
//              </AppContainer>, root
//          );
//      });

// }


// React.render(hot(module)(Login), root);