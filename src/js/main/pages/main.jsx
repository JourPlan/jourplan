/* 기본 import */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Redirect, Link} from 'react-router-dom'
import '../../../css/main.css'
import 'whatwg-fetch';
// import jQuery from 'jquery';

/* 사용자가 만든 import */
import CommonSettingPop from '../../common/commonSettingPop.jsx'; //콤보박스

/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * Main
 *************************/

class Main extends React.Component {
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

    /*************************
     * render
     *************************/

    render() {
        return (
            <div className="back-box-img">
            
                <MainHeader />
                <MainBody />
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

Main.propTypes = {
};

Main.defaultProps = {
};

/*************************
 * MainHeader
 *************************/

class MainHeader extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
             path: ''
            ,sHide : ''
            ,join: {
                email: '',              //회원가입 이메일
                id: '',                 //회원가입 아이디
                password: '',           //회원가입 비밀번호
                passwordConfirm: '',    //회원가입 비밀번호 확인
            }, // login ds
            joins: [{  a: ''
                     , b: ''
                     , c: ''
                   }],
        };
    }

    /*************************
     * 사용자 정의 함수
     *************************/

    //메인 페이지로 이동
    clickMain(e) {
        
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
            body: JSON.stringify(stJoins)
            // body: JSON.stringify(this.state.join)
            // stJoin 테스트
            // body: JSON.stringify(stJoin)
            // body: JSON.stringify(this.state.join)
        }).then((response) => response.json())
        .then((responseData) => {
            this.setState({mans: responseData});
        })
        .catch((error)=>{
            console.log('Error fetching man',error);
        });
        //this.setState({path: '/main'})
    }

    //나의 플랜 list로 이동
    clickPlanList(e) {
        location.href='/plan/planList'
    }

    //플랜 등록 page로 이동
    clickPlanSave(e) {
        location.href='/plan/planSave'
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
        const mPlan = require('../../../images/btn/ariplanwhite2.png');
        const mAdd = require('../../../images/btn/add2white2.png');
        const mNotice = require('../../../images/btn/noticewhite2.png');
        const mSetting = require('../../../images/btn/settingwhite2.png');
        
        if (this.state.path) {
            return <Redirect to={this.state.path} /> 
        }

        return (

            <header className="header-main">
                <CommonSettingPop
                    sHide={this.state.sHide}
                />
                {/* <!-- <div className="header-div"> --> */}
                <div className="header-div2">
                    <div className="header-logo main-logo">
                        <a href="javascript:;" onClick={(e) => this.clickMain(e)}>
                            <h1>JourPlan</h1>
                        </a>
                    </div>
                    
                    <div className="main-header-btn">
                    {/* <!-- <div className="main-header-btn"> -->     */}
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
        );
    }
}

/*************************
 * prop
 *************************/

MainHeader.propTypes = {
    clickMain: PropTypes.func,
    clickPlanList: PropTypes.func,
    clickPlanSave: PropTypes.func,
    clickSetting: PropTypes.func,
};

MainHeader.defaultProps = {
    clickMain: () => { },
    clickPlanList: () => { },
    clickPlanSave: () => { },
    clickSetting: () => { },
};

/*************************
 * MainBody
 *************************/

class MainBody extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            searchValue: '', //검색value
        };
    }

    /*************************
     * 사용자 정의 함수
     *************************/
    
     //플랜 검색 버튼 검색 플랜 list로 이동.
    clickMainSearch(e) {
        const searchValue  = this.state.searchValue
        
        if (searchValue == ''){
            alert('검색어를 입력하세요.');
        } else {
            alert('입력값 == ' + searchValue);
        }
        location.href='../plan/planList.html';
    }

    //국내여행 버튼
    clickMainPlanDome(e) {
        location.href='../plan/planReg.html';
    }

    //해외여행 버튼
    clickMainPlanInter(e) {
        location.href='../plan/planReg.html';
    }

    // 값변경 이벤트
    onChangeHandler(e) {
        let _state = this.state.searchValue;

        // console.log(_state);
        // console.log([e.target.name]);
        // console.log(e.target.value);

        _state = e.target.value;

        // console.log(_state);

        this.setState({
            searchValue: _state,
        });
    }

    /*************************
     * render
     *************************/

    render() {
        //image 선언
        const mDome = require('../../../images/btn/dome.png');
        const mInter = require('../../../images/btn/Inter.png');

        return (
            <section className="main-section">
                <article className="main-article">
                    {/* <!-------  MAIN 검색  ----- --> */}
                    <div className="main-search">
                        <div className="main-search-top">
                            <h1>다른 여행자의 플랜이 궁금하세요? <br/>지금 검색해 보세요!   </h1>
                        </div>
                        <div className="main-search-bottom">
                            <div className="main-search-input-div">
                                <input type="text" name="searchValue"  value={this.state.searchValue} onChange={(e) => { this.onChangeHandler(e) }} className="form-control main-search-input" />
                            </div>
                            
                            <button type="button" className="form-btn bg-olive main-search-btn" onClick={(e) => this.clickMainSearch(e)}>검색</button>
                            
                            {/* <!-- <hr className="main-bar">  --> */}
                        </div>
                    </div>
                    {/* <!-------  MAIN 등록  ----- --> */}
                    <div className="main-new">
                        {/* <!-------  국내 여행 등록  ----- --> */}
                        <div className="main-new-left">
                            <div className="main-dome">
                                {/* <!-------  국내 여행 (글씨랑 비행기로고 부분)  ----- --> */}
                                <div className="main-dome1">
                                    <div className="main-dome1-div">
                                        <div className="main-dome1-h1">
                                            <h1>국내여행</h1>
                                        </div>
                                        <div className="main-dome1-png">
                                                <img src={mDome} />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-------  국내 여행 (아래 글씨 부분)  ----- --> */}
                                <div className="main-dome2">
                                    <div className="main-dome2-div1">
                                        <h1>
                                            Domestic
                                        </h1>
                                    </div>
                                    <div className="main-dome2-div2">
                                        <h1>
                                            여행플랜을 기록해보세요.    
                                        </h1>
                                    </div>
                                </div>
                                {/* <!-------  국내 여행 (버튼 부분)  ----- --> */}
                                <div className="main-new-btn-div">
                                    <button type="button" className="form-btn bg-olive main-new-btn" onClick={(e) => this.clickMainPlanDome(e)}>Enter</button>
                                </div>
                            </div>

                            {/* <!-------  중간 bar ----- --> */}
                            {/* <!-- <div className="main-new-bar"></div> --> */}
                        </div>
                        
                        {/* <!-------  해외 여행 등록  ----- --> */}
                        <div className="main-new-right">
                            <div className="main-inter">
                                {/* <!-------  해외 여행 (글씨랑 비행기로고 부분)  ----- --> */}
                                <div className="main-inter1">
                                    <div className="main-inter1-div">
                                        <div className="main-inter1-h1">
                                            <h1>해외여행</h1>
                                        </div>
                                        <div className="main-inter1-png">
                                                <img src={mInter} />
                                        </div>
                                    </div>
                                </div>
                                {/* <!-------  해외 여행 (아래 글씨 부분)  ----- --> */}
                                <div className="main-inter2">
                                    <div className="main-inter2-div1">
                                        <h1>
                                            International
                                        </h1>
                                    </div>
                                    <div className="main-inter2-div2">
                                        <h1>
                                            여행플랜을 기록해보세요.    
                                        </h1>
                                    </div>
                                </div>
                                {/* <!-------  해외 여행 (버튼 부분)  ----- --> */}
                                <div className="main-new-btn-div">
                                    <button type="button" className="form-btn bg-olive main-new-btn" onClick={(e) => this.clickMainPlanInter(e)}>Enter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        );
    }
}

/*************************
 * prop
 *************************/

MainBody.propTypes = {
    clickMainSearch: PropTypes.func,
    onChangeHandler: PropTypes.func,
    clickMainPlanDome: PropTypes.func,
    clickMainPlanInter: PropTypes.func,
};

MainBody.defaultProps = {
    clickMainSearch: () => { },
    onChangeHandler: () => { },
    clickMainPlanDome: () => { },
    clickMainPlanInter: () => { },
};



/* ReactElements 컴파일 */

export default Main;

// const root = document.querySelector('div#mainDiv');
// render(<Main/>, root);

// const rootSettingPop = document.querySelector('div#settingPopDiv');
// render(<CommonSettingPop/>, rootSettingPop);