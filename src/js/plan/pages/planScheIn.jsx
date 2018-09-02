/* 기본 import */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import jQuery from 'jquery';

/* 전역변수 */
const { render } = ReactDOM;

/*************************
 * PlanScheIn
 *************************/

class PlanScheIn extends React.Component {
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
            <div className="plan-sche">
                <hr className="plan-bar" />
                <h1 className="plan-sche-h1-title">일정 등록하기</h1>

            </div>
        );
    }
}

/*************************
 * prop
 *************************/

PlanScheIn.propTypes = {
};

PlanScheIn.defaultProps = {
};
