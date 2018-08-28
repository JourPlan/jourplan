/* 기본 import */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import jQuery from 'jquery';

import CommonSettingPop from './commonSettingPop'; //commonSettingPop

export default class CommonHeader extends React.Component {
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
    clickSetting(e) {
        //jQuery("#settingPopDiv").css("display", "");
        console.log("onclickHeader");
        this.CommonSettingPop.setShouldHide(false);
        //this.props.setHide(false);
        //<CommonSettingPop setShouldHide = { (false) }/>
        
    }


    
    /*************************
    * render
    *************************/
    render() {
        return (
            <React.Fragment>
                <header >
                    <div className="header-div">
                        <div className="header-logo">
                            <a href="javascript:;" onClick={(e) => this.clickMain(e)}>
                                <h1>JourPlan</h1>
                            </a>
                        </div>

                        <div className="header-search">
                            <input type="text" className="form-control form-header-search" />
                        </div>
                        
                        <div className="header-btn">
                            <div className="header-btn-div">
                                <a href="javascript:;" onClick={(e) => this.clickPlanList(e)}>
                                    <img className="header-btn-plan" src="../../../assets/images/btn/ariplanblack.png" />
                                </a>
                            </div>
                            <div className="header-btn-div">
                                <a href="javascript:;" onClick={(e) => this.clickPlanReg(e)}>
                                    <img className="header-btn-add" src="../../../assets/images/btn/add2black.png" />
                                </a>
                            </div>
                            <div className="header-btn-div">
                                <a href="#">
                                    <img className="header-btn-notice" src="../../../assets/images/btn/noticeblack.png" />
                                </a>
                            </div>
                            <div className="header-btn-div">
                                <a href="javascript:;" onClick={(e) => this.clickSetting(e)}>
                                    <img className="header-btn-setting" src="../../../assets/images/btn/settingblack.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <CommonSettingPop setShouldHide = { (val) => { this.setShouldHide(val); } } /> */}
            </React.Fragment>
        );
    }
}

/*************************
 * prop
 *************************/

CommonHeader.propTypes = {
    //setShouldHide: PropTypes.func,
};

CommonHeader.defaultProps = {
    //setShouldHide: () => {},
};