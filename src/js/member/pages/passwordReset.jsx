/* 기본 import */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../css/passwordReset.css'
import {Redirect, Link} from 'react-router-dom'

/* 전역변수 */
const { render } = ReactDOM;

/*************************
 * PasswordReset
 *************************/

class PasswordReset extends React.Component {
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
    }

    /*************************
     * 사용자 정의 함수
     *************************/
    
     //비밀번호 변경 버튼 클릭
    clickPasswordReset(e) {
        
        const loginId       = this.state.login.id;
        const loginPassword = this.state.login.password;

        if (loginId == 'admin' && loginPassword == 'admin'){
            location.href='../main/main.html';
        } else {
            alert('아이디 비밀번호를 확인하세요.');
        }
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
                <div className="passwordReset-center-box">
                    <div className="passwordReset-center-back">
                        <div className="passwordReset-header">
                            <a href="javascript:;" onClick={(e) => this.clickMemberMain(e)}>
                                <h1>
                                    JourPlan
                                </h1>
                            </a>
                        </div>
                        <div className="passwordReset-body">
                            <h1 className="passwordReset-h1-title">비밀번호 재설정</h1>
                            <hr className="passwordReset-bar" />
                            <h1 className="passwordReset-h1-content">
                                JourPlan에서 사용하는 사용자 ID 또는 이메일을 입력하세요. 
                                <br/>
                                비밀번호 재설정 링크를 메일로 보내드립니다.
                            </h1>
                            <input type="email" name="id" className="form-control passwordReset-id" value={this.state.login.id} onChange={(e) => { this.onChangeHandler(e) }} placeholder="사용자 ID 또는 이메일" />

                            <div className="passwordReset-btn-div">
                                <p className="passwordReset-btn-p">
                                    <a className="passwordReset-btn-a" href="javascript:;" onClick={(e) => this.clickLogin(e)} >
                                        로그인&nbsp;
                                    </a>
                                    하러가기
                                </p>
                                <button type="button" className="form-btn bg-olive passwordReset-btn" onClick={(e) => this.clickPasswordReset(e)} >비밀번호 재설정</button>
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

PasswordReset.propTypes = {
    clickPasswordReset: PropTypes.func,
    clickLogin: PropTypes.func,
    onChangeHandler: PropTypes.func,
    clickMemberMain: PropTypes.func,
};

PasswordReset.defaultProps = {
    clickPasswordReset: () => { },
    clickLogin: () => { },
    onChangeHandler: () => { },
    clickMemberMain: () => { },
};

/* ReactElements 컴파일 */
export default PasswordReset;
// const root = document.querySelector('div#mainDiv');
// render(<PasswordReset/>, root);