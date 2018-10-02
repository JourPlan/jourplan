/* 기본 import */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../css/plan.css'
import {
    BrowserRouter as Router,
    Route, Switch, Redirect, Link, NavLink
  } from 'react-router-dom'

  import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'


/* 사용자가 만든 import */
import CommonHeader from '../../common/commonHeader.jsx'; //공통 메뉴

/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * PlanSave
 *************************/
const PlanDayList = ({match}) => {
    return(
        // <a className="plan-map-a plan-map-chk" href="#" >
            <span className="plan-map-span">
                Day - {match.params.day}
            </span>
        // </a>
    )
}

class PlanSave extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            planBase: {         //여행 base
                title: '',      //plan 제목
                content: '',    //plan 내용
                fromDt: '',     //plan 시작일
                toDt: '',       //plan 종료일
            },
            planMapList: [],   //여행 Map 리스트
            planScheList: [],  //여행 sche 리스트
            shouldHide: false,
        };
        
        this.clickMapAdd = this.clickMapAdd.bind(this);
    }

    //javascript onload와 같이 render 전에 타는 내장함수
    componentWillMount(){ 
         
        let baseData = this.state.planBase; //여행 base
        let mapDatas = [];  //여행 Map 리스트
        let scheDatas = []; //여행 sche 리스트

        baseData.title = '다낭 3박4일 여행기'; 
        baseData.content =  '기대되는 다낭 여행2 ~'
                        +   '\n #호이안 #인터컨티넨탈 #쌀국수 #반세오1 안녕하세요. 가나다라마바사아차타파하 헤더 헤더메인 조인 로그인 메인 복사본 플랜디테일 플랜 리스트 플랜등록'
                        +   '\n#호이안 #인터컨티넨탈 #쌀국수 #반세오2'
                        +   '\n#호이안 #인터컨티넨탈 #쌀국수 #반세오3'
                        +   '\n#호이안 #인터컨티넨탈 #쌀국수 #반세오4'
                        +   '\n#호이안 #인터컨티넨탈 #쌀국수 #반세오5'
                        +   '\n#호이안 #인터컨티넨탈 #쌀국수 #반세오6222'
                        +   '\n#호이안 #인터컨티넨탈 #쌀국수 #반세오6222'; 
        baseData.fromDt = '2018-03-01';
        baseData.toDt = '2018-03-04'; 
        /*
            division = M,S (M 이면 MAP, S면 Schedule이다.)
            title = 여행 제목
            planTime = 여행 시간
            planMoney = 여행 돈
            content = 여행 내용
        */
        mapDatas.push({
            division: 'M' ,
            title: '인사동 쌈지길',
            planTime: '10:00',
            planMoney: '30,000',
            content: '추천메뉴: 쿤댕, 나이소이'
                   + '\n예상비용: 쿤댕(3,000), 나이소이(3,000)232312'
                   + '\n찾아가기: ~~~ 지하철 타고~111 '
                   + '\n찾아가기: ~~~ 버스버스 타고~ 111',
        });

        mapDatas.push({
            division: 'M' ,
            title: '남산투어',
            planTime: '13:00',
            planMoney: '40,000',
            content: '추천메뉴: 쿤ㅌ댕, 나이소ㅌ이'
                   + '\n예상비용: 쿤댕(3,000), 나이ㅌ소이(3,000)232312'
                   + '\n찾아가기: ~~~ 지하철2 타고~ 222'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 222'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 222',
        });

        mapDatas.push({
            division: 'M' ,
            title: '63빌딩',
            planTime: '15:00',
            planMoney: '65,000',
            content: '추천메뉴: ㅠㅠㄴㅇㄹ'
                   + '\n예상비용: 쿤댕(3,000), 나이소이(3,000)232312'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 33'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 33'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 333'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 333'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 3333'
                   + '\n찾아가기: ~~~ 버스버스 타고~ 3333',
        });

    
        this.setState({
            planMapList: mapDatas,
            planBase: baseData
        });
    }

    /*************************
     * 사용자 정의 함수
     *************************/
    // setHideShow(hideValue) {
    //     if (hideValue) {

    //     } else {

    //     }

    // }

    clickMapAdd(e) {
        let lShould = this.state.shouldHide;
        
        console.log("== " + lShould);
        if (lShould){
            lShould = false;
        } else {
            lShould = true;
        }
        this.setState({
            shouldHide: lShould 
        });

    }
    
    /*************************
     * render
     *************************/

    render() {
        //image 선언
        const mLocation = require('../../../images/btn/location.png')
        const mAdd = require('../../../images/btn/add2black.png')
        const mAddTable = require('../../../images/btn/addblack.png')
        const mSettingGray = require('../../../images/btn/settingGray.png')
        const mSchedule = require('../../../images/btn/schedule.png')



        return (
            <div>
                <CommonHeader
                    sDiv="plan"
                />
                <section >
                    <article>
                        {/* <!-------   PLAN 기본정보  ----- --> */}
                        <div className="plan-base">
                            
                            <div className="plan-base-title">
                                <ul>
                                    <li>
                                    {this.state.planBase.title}
                                    {/* 다낭 3박4일 여행기 */}
                                    </li>
                                </ul>
                            </div>
                            <div className="plan-base-day">
                                <ul>
                                    <li>
                                    {this.state.planBase.fromDt} ~ {this.state.planBase.toDt}
                                        {/* 2018-03-01 ~ 2018-03-04 */}
                                    </li>
                                </ul>
                            </div> 
                            <div className="plan-base-content">
                                <ul>
                                    <li>
                                        {this.state.planBase.content}
                                    </li>
                                </ul>
                            </div> 
                        </div>
                        {/* <!-------  PLAN 지도  ----- --> */}
                        <div className="plan-map">
                            {/* <hr className="plan-bar" /> */}
                            <h1 className="plan-map-h1-title">지도 등록하기</h1>
                            
                            {/* <!-- 지도 검색 input, 핀추가, 맵추가 영역 --> */}
                            <div className="plan-map-header">
                                <div className="plan-map-header-search">
                                    <input type="text" className="form-control plan-map-search form-readOnly" readOnly="readOnly" defaultValue="aa"/>
                                </div>
                                <div className="plan-map-header-button">
                                    <div className="plan-map-header-btn-div">
                                        <a href="javascript:;" onClick={(e) => this.clickMapAdd(e)}>
                                            <img className="plan-map-header-btn-location" src={mLocation} />
                                        </a>
                                    </div>
                                    <div className="plan-map-header-btn-div">
                                        <a href="#">
                                            <img className="plan-map-header-btn-add" src={mAdd} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 지도 영역 --> */}
                            <div className="plan-map-div" >
                                {this.state.planMapList.length-1 > 0 ?
                                    this.state.planMapList.map((obj, index) => (
                                        index == 0 ?
                                        <NavLink exact={true} key={index} className="plan-map-a" activeClassName="plan-map-chk" to={"/plan/planSave"}>Day - {index+1}</NavLink>
                                        : 
                                        <NavLink key={index} className="plan-map-a" activeClassName="plan-map-chk" to={"/plan/planSave/Day" + (index+1)}>Day - {index+1}</NavLink>
                                    )
                                    )
                                    :
                                        ""
                                }
                                <Route
                                    path="/plan/planSave/:day"
                                    Component={PlanDayList}
                                />
                            </div>
                            
                                {/* <!-- 실제 지도 영역 --> */}
                            <div className="plan-map-real">
                                <Map google={this.props.google} zoom={14}>
                            
                                    <Marker onClick={this.onMarkerClick}
                                            name={'Current location'} />
                            
                                    <InfoWindow onClose={this.onInfoWindowClose}>
                                        {/* <div>
                                            <h1>{this.state.selectedPlace.name}</h1>
                                        </div> */}
                                    </InfoWindow>
                                </Map>
                                {/* <!-- 지도에서 핀찍었을 경우 오른쪽에서 나오는 list 영역 --> */}
                                <div className={this.state.shouldHide ? "hidden" : "plan-map-list"  }>
                                    {/* <!-- 핀에 대한 정보 --> */}
                                    {this.state.planMapList.length > 0 ?
                                        this.state.planMapList.map((obj, index) => (

                                            <div className="plan-map-list-div" key={index}>
                                                <ul className="plan-map-ul">
                                                    <li className="plan-map-li">
                                                        <img className="plan-btn-location" src={mLocation} />
                                                    </li>
                                                    <li className="plan-map-li"> 
                                                        <input type="text" className="form-control plan-map-title-input form-readOnly" readOnly="readOnly" defaultValue={obj.title} />
                                                    </li>
                                                </ul>
                                                <ul className="plan-map-ul">
                                                    <li className="plan-map-li">
                                                        <input type="text" className="form-control plan-map-middle-input1 form-readOnly" readOnly="readOnly" defaultValue={obj.planTime} />
                                                    </li>
                                                    <li className="plan-map-li">
                                                        <input type="text" className="form-control plan-map-middle-input2 form-readOnly" readOnly="readOnly" defaultValue={obj.planMoney} />
                                                    </li>
                                                </ul>
                                                <ul className="plan-map-ul">
                                                    <li className="plan-map-li">
                                                        <textarea className="form-control plan-map-textarea form-readOnly" readOnly="readOnly" defaultValue={obj.content} />
                                                    </li>
                                                </ul>
                                            </div>
                                            )
                                        )
                                    :
                                        ""
                                    }
                                </div>
                            </div>
                        </div>
                        {/* <!-------  PLAN 일정  ----- --> */}
                        <div className="plan-sche">
                            <hr className="plan-bar" />
                            <h1 className="plan-sche-h1-title">일정 등록하기</h1>
                            
                            <div className="plan-sche-frame">
                                <div className="plan-sche-div">
                                    <table className="plan-sche-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="3">
                                                    2017.05.05 목
                                                </th>
                                                <th>
                                                    <img className="plan-table-btn-settingGray" src={mSettingGray} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    10:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    인사동 쌈지길
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    첫번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    30,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    13:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    남산타워
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-unhide" colSpan="4">
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-money-unhide" colSpan="4">
                                                    40,000
                                                </td>
                                            </tr>
                                            <tr className="plan-table-sche-tr">
                                                <td >
                                                    14:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-schedule" src={mSchedule} />
                                                </td>
                                                <td>
                                                    남산타워에서 쉼.
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    세번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    50,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    23:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    이태원 프리덤
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    네번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="plan-sche-table-bottom">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    <img className="plan-table-btn-add" src={mAddTable} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    합계
                                                </td>
                                                <td>
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="plan-sche-div">
                                    <table className="plan-sche-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="3">
                                                    2017.05.05 목
                                                </th>
                                                <th>
                                                    <img className="plan-table-btn-settingGray" src={mSettingGray} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    10:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    인사동 쌈지길
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    첫번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    30,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    13:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    남산타워
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    40,000
                                                </td>
                                            </tr>
                                            <tr className="plan-table-sche-tr">
                                                <td >
                                                    14:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-schedule" src={mSchedule} />
                                                </td>
                                                <td>
                                                    남산타워에서 쉼.
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    세번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    50,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    23:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    이태원 프리덤
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    네번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="plan-sche-table-bottom">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    <img className="plan-table-btn-add" src={mAddTable} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    합계
                                                </td>
                                                <td>
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            <div className="plan-sche-div">
                                    <table className="plan-sche-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="3">
                                                    2017.05.05 목
                                                </th>
                                                <th>
                                                    <img className="plan-table-btn-settingGray" src={mSettingGray} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    10:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    인사동 쌈지길
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    첫번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    30,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    13:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    남산타워
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    40,000
                                                </td>
                                            </tr>
                                            <tr className="plan-table-sche-tr">
                                                <td >
                                                    14:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-schedule" src={mSchedule} />
                                                </td>
                                                <td>
                                                    남산타워에서 쉼.
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    세번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    50,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    23:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    이태원 프리덤
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    네번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="plan-sche-table-bottom">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    <img className="plan-table-btn-add" src={mAddTable} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    합계
                                                </td>
                                                <td>
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

    <div className="plan-sche-div">
                                    <table className="plan-sche-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="3">
                                                    2017.05.05 목
                                                </th>
                                                <th>
                                                    <img className="plan-table-btn-settingGray" src={mSettingGray} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    10:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    인사동 쌈지길
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    첫번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    30,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    13:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    남산타워
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    40,000
                                                </td>
                                            </tr>
                                            <tr className="plan-table-sche-tr">
                                                <td >
                                                    14:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-schedule" src={mSchedule} />
                                                </td>
                                                <td>
                                                    남산타워에서 쉼.
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    세번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    50,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    23:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    이태원 프리덤
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    네번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="plan-sche-table-bottom">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    <img className="plan-table-btn-add" src={mAddTable} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    합계
                                                </td>
                                                <td>
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="plan-sche-div">
                                    <table className="plan-sche-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="3">
                                                    2017.05.05 목
                                                </th>
                                                <th>
                                                    <img className="plan-table-btn-settingGray" src={mSettingGray} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td >
                                                    10:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    인사동 쌈지길
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    첫번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    30,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    13:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    남산타워
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                    <br />
                                                    두번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    40,000
                                                </td>
                                            </tr>
                                            <tr className="plan-table-sche-tr">
                                                <td >
                                                    14:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-schedule" src={mSchedule} />
                                                </td>
                                                <td>
                                                    남산타워에서 쉼.
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    세번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    50,000
                                                </td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    23:00
                                                </td>
                                                <td>
                                                    <img className="plan-table-btn-location" src={mLocation} />
                                                </td>
                                                <td>
                                                    이태원 프리덤
                                                </td>
                                                <td>
                                                    버튼
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    네번째 행의 내용입니다.
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="plan-sche-table-content-hide" colSpan="4">
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table className="plan-sche-table-bottom">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    <img className="plan-table-btn-add" src={mAddTable} />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    합계
                                                </td>
                                                <td>
                                                    60,000
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>








                            </div>
                        </div>

                        {/* <!-------  PLAN 버튼영역  ----- --> */}
                        <div className="plan-btn">
                            <button type="button" className="form-btn bg-olive plan-common-btn" >저장하기</button>
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

PlanSave.propTypes = {
};

PlanSave.defaultProps = {
};

/* ReactElements 컴파일 */
export default GoogleApiWrapper({
    apiKey: ('AIzaSyBDcU0ATxSjRDcUu-3ta1I9H-mIhvuy3MM'),
    language: 'ko'
  })(PlanSave)
  

//export default PlanSave;
// const rootHeader = document.querySelector('div#headerDiv');
// render(<CommonHeader/>, rootHeader);

// const rootBody = document.querySelector('div#mainDiv');
// render(<PlanSave/>, rootBody);

// const rootSettingPop = document.querySelector('div#settingPopDiv');
// render(<CommonSettingPop/>, rootSettingPop);