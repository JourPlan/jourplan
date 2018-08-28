/* 기본 import */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import jQuery from 'jquery';


export default class CommonSettingPop extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            shouldHide: true
        };
        this.setShouldHide = this.setShouldHide.bind(this);
    }
    
    /*************************
    * 사용자 정의 함수
    *************************/

    
    //프로필 편집
    clickSettingProfile(e) {
        location.href='../member/settingProfile.html';
    }

    //친구 관리
    clickSettingFriend(e) {
        location.href='../member/settingFriend.html';
    }

    //친구요청 관리
    clickSettingFriendRequest(e) {
        location.href='../member/settingFriendReq.html';
    }

    //비밀번호 변경
    clickSettingChangePW(e) {
        location.href='../member/settingPassChg.html';
    }

    //로그아웃
    clickSettingLogout(e) {
        location.href='../member/login.html';
    }

    //취소
    clickSettingCancel(e) {
        //jQuery("#settingPopDiv").css("display", "none");
        console.log("onclickPop"); 
        this.setShouldHide(true);
    }; 

    setShouldHide(value) {
        console.log("hide");
        this.setState({
            shouldHide: value
        });
    };

    /*************************
    * render
    *************************/
    render() {
        return (
            <div>
                <div className={this.state.shouldHide ? "hidden" : "setting-pop-background"}>
                    <div className="setting-pop-div">
                        <div className="setting-pop-center-box">
                            <div className="setting-pop-center-back">
                                    <button className="setting-pop-button" onClick={(e) => this.clickSettingProfile(e)}>프로필 편집</button>
                                    <button className="setting-pop-button" onClick={(e) => this.clickSettingFriend(e)}>친구 관리</button>
                                    <button className="setting-pop-button" onClick={(e) => this.clickSettingFriendRequest(e)}>친구요청 관리</button>
                                    <button className="setting-pop-button" onClick={(e) => this.clickSettingChangePW(e)}>비밀번호 변경</button>
                                    <button className="setting-pop-button" onClick={(e) => this.clickSettingLogout(e)}>로그아웃</button>
                                    <button className="setting-pop-button" onClick={(e) => this.clickSettingCancel(e)}>취소</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <CommonHeader
                    setHide={this.setShouldHide}
                    /> */}
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

CommonSettingPop.propTypes = {
    setShouldHide: PropTypes.func,
};

CommonSettingPop.defaultProps = {
    setShouldHide: () => {},
};
