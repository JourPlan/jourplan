/* 기본 import */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../css/setting.css'

/* 사용자가 만든 import */
import CommonHeader from '../../common/commonHeader.jsx'; //공통 메뉴
import CommonSettingMenu from '../../common/commonSettingMenu.jsx'; //Setting왼쪽 메뉴


/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * Setting
 *************************/

class SettingProfile extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            profile: {
                id: '',             //로그인 아이디
                planCnt: '',        //plan 등록개수
                friendCnt: '',      //친구 수
                introduce: '',      //자기소개
            }, // login ds
            planList: [],   //여행 리스트
        };
    } 
    /*************************
    * React life cycle 정의 함수
    *************************/

    //컴포넌트가 마운트 되기 직전
    componentWillMount(){

        let lProfile = this.state.profile;
        lProfile.id = 'h_880524';
        lProfile.planCnt = '17';
        lProfile.friendCnt = '349';
        lProfile.introduce = '안녕하세요. 자기소개입니다.이세훈입니다.';
    }
    
    //컴포넌트가 마운트 된 직후
    componentDidMount(){
        let lProfile = this.state.profile;
        lProfile.id = 'h_88052422';
    }
    //컴포넌트의 프로퍼티가 변경될 때
    componentWillReceiveProps(nextProps){
        
        console.log("----------------------")
    }

    /*************************
     * 사용자 정의 함수
     *************************/ 
    
    
    /*************************
     * render
     *************************/

    render() {
        //image 선언
        const mUser = require('../../../images/btn/user.png');


        return (
            <div>
                <CommonHeader
                    sDiv="setting"
                />
                <section>
                    <article>
                        
                        <div className="setting-div">
                            <CommonSettingMenu/>
                            <div className="setting-content">
                                <h1 className="setting-content-h1-title">프로필 편집</h1>
                                <hr className="setting-content-bar" />
                                <form>
                                    
                                    <div className="setting-content-div setting-profile-img">
                                        <div className="setting-content-circle">
                                            <img className="setting-content-circle-img" src={mUser} />
                                        </div>
                                    </div>
                                    
                                    <div className="setting-content-div">
                                        <div className="setting-content-left">
                                            <label>
                                                사용자 이름
                                            </label>
                                        </div>
                                        <div className="setting-content-right">
                                            <input type="text" defaultValue={this.state.profile.id} className="form-control setting-content-input" placeholder="사용자 이름" />
                                        </div>
                                    </div>
                                    
                                    <div className="setting-content-div">
                                        <div className="setting-content-left">
                                            <label>
                                                이메일
                                            </label>
                                        </div>
                                        <div className="setting-content-right">
                                            <input type="email" className="form-control setting-content-input" placeholder="이메일" />
                                        </div>
                                    </div>
                                    
                                    <div className="setting-content-div">
                                        <div className="setting-content-left">
                                            <label>
                                                자기소개
                                            </label>
                                        </div>
                                        <div className="setting-content-right setting-textarea">
                                            <textarea className="form-control setting-content-textarea"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="setting-content-div">
                                        <div className="setting-content-left">
                                            <label>
                                                생일
                                            </label>
                                        </div>
                                        <div className="setting-content-right">
                                            <input type="text" className="form-control setting-content-input" placeholder="생일" />
                                        </div>
                                    </div>
                                    
                                    <div className="setting-content-div">
                                        <div className="setting-content-left">
                                            <label>
                                                성별
                                            </label>
                                        </div>
                                        <div className="setting-content-right">
                                            <input type="text" className="form-control setting-content-input" placeholder="성별" />
                                        </div>
                                    </div>
                                    
                                    <div className="setting-content-div">
                                        <div className="setting-content-left">
                                            <label>
                                                비공개
                                            </label>
                                        </div>
                                        <div className="setting-content-right">
                                            <input type="text" className="form-control setting-content-input" placeholder="사용자 이름" />
                                        </div>
                                    </div>
                                    <div className="setting-content-div">
                                        <div className="setting-content-center">
                                            <button type="button" className="form-btn bg-olive setting-btn">저장하기</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </article>
                </section>
                </div>
        );
    }
}

/*************************
 * prop
 *************************/

SettingProfile.propTypes = {
};

SettingProfile.defaultProps = {
};
 
/* ReactElements 컴파일 */


// const rootBody = document.querySelector('div#mainDiv');
// render(<SettingProfile/>, rootBody);

export default SettingProfile;