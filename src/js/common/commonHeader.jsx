/* 기본 import */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Redirect, Link,Switch} from 'react-router-dom'

import CommonSettingPop from './commonSettingPop.jsx'; //commonSettingPop

export default class CommonHeader extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);
        this.state = {
             path: ''
            ,sHide : ''  //setting pop 호출
        };
        
        
    }

    /*************************
    * React life cycle 정의 함수
    *************************/

    //컴포넌트가 마운트 되기 직전
    componentWillMount(){

    }
    
    //컴포넌트가 마운트 된 직후
    componentDidMount(){
        
    }

    //컴포넌트의 프로퍼티가 변경될 때
    componentWillReceiveProps(nextProps){
        this.setState({
            sHide: 'Y'
        });
    }

    /*************************
    * 사용자 정의 함수
    *************************/
    //메인 페이지로 이동
    clickMain(e) {
        if (this.props.sDiv == 'main'){
            if (window.location.pathname != '/main'){
                this.setState({path: '/main'})
            }
        } else {
            location.href='/main'
        }
    }

    //나의 플랜 list로 이동
    clickPlanList(e) {
        if (this.props.sDiv == 'plan'){
            if (window.location.pathname != '/plan/planList' ){
                this.setState({path: '/plan/planList'})
            }
        } else {
            location.href='/plan/planList'
        }
    }

    //플랜 등록 page로 이동
    clickPlanSave(e) {
        if (this.props.sDiv == 'plan'){
            if (window.location.pathname != '/plan/planSave'){
                this.setState({path: '/plan/planSave'})
            }
        } else {
            location.href='/plan/planSave'
        }
    }

    //정보 setting 팝업 호출
    clickSetting(e) {
        this.setState({
            sHide: 'N'
        });
    }


    
    /*************************
    * render
    *************************/
    render() {
        //image 선언
        const mPlan = require('../../images/btn/ariplanblack.png');
        const mAdd = require('../../images/btn/add2black.png');
        const mNotice = require('../../images/btn/noticeblack.png');
        const mSetting = require('../../images/btn/settingblack.png');

        if (this.state.path) {
            return <Redirect to={this.state.path} />
        }

        return (
            <div>
                {/* {this.state.sHide == "Y" ? 
                    "" 
                    : */}
                    <CommonSettingPop
                        sHide={this.state.sHide}
                        sDiv={this.props.sDiv}
                    />
                {/* } */}
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
                                    <img className="header-btn-plan" src={mPlan} />
                                </a>
                            </div>
                            <div className="header-btn-div">
                                <a href="javascript:;" onClick={(e) => this.clickPlanSave(e)}>
                                    <img className="header-btn-add" src={mAdd} />
                                </a>
                            </div>
                            <div className="header-btn-div">
                                <a href="#">
                                    <img className="header-btn-notice" src={mNotice} />
                                </a>
                            </div>
                            <div className="header-btn-div">
                                <a href="javascript:;" onClick={(e) => this.clickSetting(e)}>
                                    <img className="header-btn-setting" src={mSetting} />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
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