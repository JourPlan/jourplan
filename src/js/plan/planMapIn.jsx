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
 * PlanMapIn
 *************************/

class PlanMapIn extends React.Component {
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
                                        <img className="plan-map-header-btn-location" src="../../../assets/images/btn/location.png" />
                                    </a>
                                </div>
                                <div className="plan-map-header-btn-div">
                                    <a href="#">
                                        <img className="plan-map-header-btn-add" src="../../../assets/images/btn/add2black.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- 지도 영역 --> */}
                        <div className="plan-map-div" >
                            {/* <!-- day별 텝 영역 --> */}
                            <a className="plan-map-a" href="#">
                                <span className="plan-map-span">
                                    Day - 1
                                </span>
                            </a>
                            <a className="plan-map-a plan-map-chk" href="#">
                                <span className="plan-map-span">
                                    Day - 2
                                </span>
                            </a>
                            <a className="plan-map-a" href="#">
                                <span className="plan-map-span">
                                    Day - 3
                                </span>
                            </a>

                        </div>
                        
                            {/* <!-- 실제 지도 영역 --> */}
                        <div className="plan-map-real">
                            {/* <!-- 지도에서 핀찍었을 경우 오른쪽에서 나오는 list 영역 --> */}
                            <div className={this.state.shouldHide ? "hidden" : "plan-map-list"  }>
                                {/* <!-- 핀에 대한 정보 --> */}
                                <div className="plan-map-list-div">
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <img className="plan-btn-location" src="../../../assets/images/btn/location.png" />
                                        </li>
                                        <li className="plan-map-li"> 
                                            <input type="text" className="form-control plan-map-title-input form-readOnly" readOnly="readOnly" defaultValue="인사동 쌈지길" />
                                        </li>
                                    </ul>
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <input type="text" className="form-control plan-map-middle-input1 form-readOnly" readOnly="readOnly" defaultValue="10:00" />
                                        </li>
                                        <li className="plan-map-li">
                                            <input type="text" className="form-control plan-map-middle-input2 form-readOnly" readOnly="readOnly" defaultValue="30,000" />
                                        </li>
                                    </ul>
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <textarea className="form-control plan-map-textarea form-readOnly" readOnly="readOnly" defaultValue="추천메뉴 : 쿤댕, 나이소이, 쌀국수 ...ㄴㄴㅇㅌㄴㅇㅊㅊ
                                                예상비용 : 쿤댕(3,000), 나이소이(3,000)232312
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="plan-map-list-div">
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <img className="plan-btn-location" src="../../../assets/images/btn/location.png" />
                                        </li>
                                        <li className="plan-map-li"> 
                                            <input type="text" className="form-control plan-map-title-input form-readOnly" readOnly="readOnly" defaultValue="인사동 쌈지길" />
                                        </li>
                                    </ul>
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <input type="text" className="form-control plan-map-middle-input1 form-readOnly" readOnly="readOnly" defaultValue="10:00" />
                                        </li>
                                        <li className="plan-map-li">
                                            <input type="text" className="form-control plan-map-middle-input2 form-readOnly" readOnly="readOnly" defaultValue="30,000" />
                                        </li>
                                    </ul>
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <textarea className="form-control plan-map-textarea form-readOnly" readOnly="readOnly" defaultValue="추천메뉴 : 쿤댕, 나이소이, 쌀국수 ...ㄴㄴㅇㅌㄴㅇㅊㅊ
                                                예상비용 : 쿤댕(3,000), 나이소이(3,000)232312
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ" />
                                        </li>
                                    </ul>
                                </div>

                                <div className="plan-map-list-div">
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <img className="plan-btn-location" src="../../../assets/images/btn/location.png" />
                                        </li>
                                        <li className="plan-map-li"> 
                                            <input type="text" className="form-control plan-map-title-input form-readOnly" readOnly="readOnly" defaultValue="인사동 쌈지길" />
                                        </li>
                                    </ul>
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <input type="text" className="form-control plan-map-middle-input1 form-readOnly" readOnly="readOnly" defaultValue="10:00" />
                                        </li>
                                        <li className="plan-map-li">
                                            <input type="text" className="form-control plan-map-middle-input2 form-readOnly" readOnly="readOnly" defaultValue="30,000" />
                                        </li>
                                    </ul>
                                    <ul className="plan-map-ul">
                                        <li className="plan-map-li">
                                            <textarea className="form-control plan-map-textarea form-readOnly" readOnly="readOnly" defaultValue="추천메뉴 : 쿤댕, 나이소이, 쌀국수 ...ㄴㄴㅇㅌㄴㅇㅊㅊ
                                                예상비용 : 쿤댕(3,000), 나이소이(3,000)232312
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                                찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ" />
                                        </li>
                                    </ul>
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

PlanMapIn.propTypes = {
};

PlanMapIn.defaultProps = {
};
