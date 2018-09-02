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
 * PlanSave
 *************************/

class PlanSave extends React.Component {
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

    //javascript onload와 같이 render 전에 타는 내장함수
    componentWillMount(){
        let lProfile = this.state.profile;
        lProfile.id = 'h_880524';
        lProfile.planCnt = '17';
        lProfile.friendCnt = '349';
        lProfile.introduce = '안녕하세요. 자기소개입니다.이세훈입니다.';

        let datas = [];
        
        datas.push({
            id: 'h_880524',
            title: '다낭 3박4일 여행',
            day: '2017-02-01 ~ 2017-03-04',
            content: '다낭 인터컨티넨탈, 멜리아 리조트, 쌀국수, 반미, 콩카페',
        });

        datas.push({
            id: 'h_880524',
            title: '스페인, 이탈리아, 프랑스, 영국, 독일 투어 유럽여행 :)',
            day: '2017-02-01 ~ 2017-03-04',
            content: '스페인, 이탈리아 영국 독일 유럽 등등 <br /> #스페인 #이탈리아 #프랑스 #영국 #독일',
        });
    
        this.setState({
            planList: datas,
            profile: lProfile
        });
    }

    /*************************
     * 사용자 정의 함수
     *************************/

    
    /*************************
     * render
     *************************/

    render() {
        return (
            <section >
                <article>
                    {/* <!-------   PLAN 기본정보  ----- --> */}
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
                    {/* <!-------  PLAN 지도  ----- --> */}
                    <div className="plan-map">
                        {/* <!-- 지도 검색 input, 핀추가, 맵추가 영역 --> */}
                        <div className="plan-map-header">
                            <div className="plan-map-header-search">
                                <input type="text" className="form-control plan-map-search" />
                            </div>
                            <div className="plan-map-header-button">
                                <div className="plan-map-header-btn-div">
                                    <a href="#">
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
                        <div className="plan-map-div">
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
                            <div className="plan-map-list">
                                {/* <!-- 핀에 대한 정보 --> */}
                                <div>
                                    <ul>
                                        <li>아이콘</li>
                                        <li>
                                            인사동 쌈지길
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            10:00
                                        </li>
                                        <li>
                                            30,000
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            추천메뉴 : 쿤댕, 나이소이, 쌀국수 ...ㄴㄴㅇㅌㄴㅇㅊㅊ<br/>
                                            예상비용 : 쿤댕(3,000), 나이소이(3,000)232312<br/>
                                            찾아가기 : >>>2231231ㄴㅇㅁㄴㅇㄹㄻ
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-------  PLAN 일정  ----- --> */}
                    <div className="plan-sche">
                        
                    </div>
                    {/* <!-------  PLAN 버튼영역  ----- --> */}
                    <div className="plan-btn">
                        
                    </div>
                </article>
            </section>
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
const rootHeader = document.querySelector('div#headerDiv');
render(<CommonHeader/>, rootHeader);

const rootBody = document.querySelector('div#mainDiv');
render(<PlanSave/>, rootBody);

const rootSettingPop = document.querySelector('div#settingPopDiv');
render(<CommonSettingPop/>, rootSettingPop);