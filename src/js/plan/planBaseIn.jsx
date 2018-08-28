/* 기본 import */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import jQuery from 'jquery';

/* 사용자가 만든 import */
import CommonHeader from '../common/commonHeader'; //공통 메뉴
import CommonSettingPop from '../common/commonSettingPop'; //SettingPop

/* 전역변수 */
const { render } = ReactDOM;

/*************************
 * PlanBaseIn
 *************************/

class PlanBaseIn extends React.Component {
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
            planMapList: [],   //여행 Map 리스트
            planScheList: [],  //여행 sche 리스트
            shouldHide: false,
        };
    }

    //javascript onload와 같이 render 전에 타는 내장함수
    componentWillMount(){

        let mapDatas = [];  //여행 Map 리스트
        let scheDatas = []; //여행 sche 리스트
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
                   + '예상비용: 쿤댕(3,000), 나이소이(3,000)232312'
                   + '찾아가기: ~~~ 지하철 타고~ ',
        });

        mapDatas.push({
            division: 'M' ,
            title: '남산투어',
            planTime: '13:00',
            planMoney: '40,000',
            content: '추천메뉴: 쿤ㅌ댕, 나이소ㅌ이'
                   + '예상비용: 쿤댕(3,000), 나이ㅌ소이(3,000)232312'
                   + '찾아가기: ~~~ 지하철2 타고~ ',
        });

        mapDatas.push({
            division: 'M' ,
            title: '63빌딩',
            planTime: '15:00',
            planMoney: '65,000',
            content: '추천메뉴: ㅠㅠㄴㅇㄹ'
                   + '예상비용: 쿤댕(3,000), 나이소이(3,000)232312'
                   + '찾아가기: ~~~ 버스버스 타고~ ',
        });

    
        this.setState({
            planMapList: mapDatas
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
        this.setState({
            shouldHide: true 
        });

    }
    
    /*************************
     * render
     *************************/

    render() {
        return (
            <div className="plan-base">
                <div className="plan-base-title">
                    <ul>
                        <li>
                            다낭 3박4일 여행기
                        </li>
                    </ul>
                </div>
                <div className="plan-base-day">
                    <ul>
                        <li>
                            2018-03-01 ~ 2018-03-04
                        </li>
                    </ul>
                </div> 
                <div className="plan-base-content">
                    <ul>
                        <li>
                                
                            기대되는 다낭 여행 ~ 
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오1 안녕하세요. 가나다라마바사아차타파하 헤더 헤더메인 조인 로그인 메인 복사본 플랜디테일 플랜 리스트 플랜등록
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오2
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오3
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오4
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오5
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오6222
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오4
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오5
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오6222
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오4
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오5
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오6222
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오4
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오5
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오6222
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오4
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오5
                            <br/>
                            #호이안 #인터컨티넨탈 #쌀국수 #반세오6222
                            <br/> 
                        </li>
                    </ul>
                </div> 
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

PlanBaseIn.propTypes = {
};

PlanBaseIn.defaultProps = {
};
