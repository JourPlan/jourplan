/* 기본 import */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Redirect, NavLink} from 'react-router-dom'
// import jQuery from 'jquery';

export default class CommonSettingMenu extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    /*************************
    * 사용자 정의 함수
    *************************/
    //메인 페이지로 이동
    clickMain(e) {
        e.class
        location.href='../main/main.html';
    }

    //나의 플랜 list로 이동
    clickPlanList(e) {
        location.href='../plan/planList.html';
    }

    //플랜 등록 page로 이동
    clickPlanReg(e) {
        location.href='../plan/planReg.html';
    }

    //정보 setting 팝업 호출
    clickSetting(e,val) {
        if (val == "profile"){
            
            e.className = 'setting-menu-a setting-menu-chk';
            location.href='../member/settingProfile.html';
        } else {

        }
    }
    /*************************
    * render
    *************************/
    render() {
        return (
            <div className="setting-menu">
                <ul className="setting-menu-ul">
                    <li>
                        {/* <a href="javascript:;" onClick={(e) => this.clickSetting(e,"profile")} className="setting-menu-a">
                            프로필 편집
                        </a> */}
                        <NavLink to="/settingProfile" className="setting-menu-a" activeClassName="setting-menu-chk">프로필 편집</NavLink>
                        {/* <a href="./settingProfile.html" className="setting-menu-a setting-menu-chk">프로필 편집</a> */}
                    </li>
                    <li>
                        {/* <a href="./settingFriend.html" className="setting-menu-a">친구 관리</a> */}
                        <NavLink to="/settingFriend" className="setting-menu-a" activeClassName="setting-menu-chk">친구 관리</NavLink>
                    </li>
                    <li>
                        {/* <a href="./settingFriendReq.html" className="setting-menu-a ">친구요청 관리</a> */}
                        <NavLink to="/settingFriendReq" className="setting-menu-a" activeClassName="setting-menu-chk">친구요청 관리</NavLink>
                    </li>
                    <li>
                        {/* <a href="./settingPassChg.html" className="setting-menu-a">비밀번호 변경</a> */}
                        <NavLink to="/settingPassChg" className="setting-menu-a" activeClassName="setting-menu-chk">비밀번호 변경</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

CommonSettingMenu.propTypes = {
};

CommonSettingMenu.defaultProps = {
};