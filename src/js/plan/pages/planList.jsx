/* 기본 import */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../css/plan.css'

import {Redirect} from 'react-router-dom'

/* 사용자가 만든 import */
import CommonHeader from '../../common/commonHeader.jsx'; //공통 메뉴

/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * PlanListBody
 *************************/

class PlanListBody extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            path: '',
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
            cnt:'2'
        });

        datas.push({
            id: 'h_880524',
            title: '스페인, 이탈리아, 프랑스, 영국, 독일 투어 유럽여행 :)',
            day: '2017-02-01 ~ 2017-03-04',
            content: '스페인, 이탈리아 영국 독일 유럽 등등 <br /> #스페인 #이탈리아 #프랑스 #영국 #독일',
            cnt:'1'
        });
    
        this.setState({
            planList: datas,
            profile: lProfile
        });
    }

    
    /*************************
     * 사용자 정의 함수
     *************************/
    clickPlanDetail(e){
        this.setState({path: '/plan/planDetail/' + e})
    }
    
    /*************************
     * render
     *************************/

    render() {
        //image 선언
        const mUser = require('../../../images/btn/user.png')
        const mPlanListMenu = require('../../../images/btn/planlistmenu.png')
        
        if (this.state.path) {
            return <Redirect to={this.state.path} /> 
        }
        return (
            <div>
                <CommonHeader
                    sDiv="plan"
                />
                <section >
                    <article>
                        <div className="plan-list-left">
                            <div className="plan-list-left-div">
                                <div className="plan-profile">
                                    {/* 프로필사진 영역 */}
                                    <div className="plan-profile-img-div">
                                        <div className="plan-profile-circle">
                                            <img className="plan-profile-circle-img" src={mUser} />
                                        </div>
                                    </div>
                                    {/* 프로필정보 영역 */}
                                    <div className="plan-profile-info-div">
                                        <h1 className="plan-profile-h1-id">
                                            {this.state.profile.id}
                                        </h1>
                                        <h1 className="plan-profile-h1-plan"> 
                                            Plan &nbsp;&nbsp;&nbsp;<font size="3"><b>{this.state.profile.planCnt}</b></font>
                                        </h1>
                                        <h1 className="plan-profile-h1-friend">
                                            친구 &nbsp;&nbsp;&nbsp;&nbsp;<font size="3"><b>{this.state.profile.friendCnt}</b></font>
                                        </h1>
                                    </div>

                                    <hr className="plan-profile-bar" />

                                    {/* 자기소개 영역 */}
                                    <div className="plan-profile-introduce-div">
                                        <h1 className="plan-profile-h1-introduce">
                                            {this.state.profile.introduce}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="plan-list-right">
                            <div className="plan-list-right-div">
                                {this.state.planList.length > 0 ?
                                    this.state.planList.map((obj, index) => (
                                        // <!-------   PLAN 리스트  ----- -->
                                        <div className="plan-list" key={index}>
                                            {/* <!-------   PLAN 프로필 + 아이디  ----- --> */}
                                            <div className="plan-list-id">
                                                <div className="plan-circle">
                                                    <img className="plan-circle-img" src={mUser} />
                                                </div>
                                                <div className="plan-id-div">
                                                    <h1>
                                                        {obj.id}
                                                    </h1>
                                                </div>
                                                <a href="#">
                                                    <div className="plan-list-menu">
                                                        <img className="plan-list-menu-img" src={mPlanListMenu} />
                                                    </div>
                                                </a>
                                            </div>
                                            {/* <!-------   PLAN 제목  ----- --> */}
                                            
                                            <div className="plan-list-title">
                                                <div className="plan-title-div">
                                                    <a href="javascript:;" onClick={(e) => this.clickPlanDetail(obj.cnt)}>
                                                        <h1>
                                                            {obj.title}
                                                        </h1>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            {/* <!-------   PLAN 일정 기간  ----- --> */}
                                            <div className="plan-list-day">
                                                <div className="plan-day-div">
                                                    <h1>
                                                        {obj.day}
                                                    </h1>
                                                </div>
                                            </div>
                                            {/* <!-------   PLAN 내용  ----- --> */}
                                            <div className="plan-list-content">
                                                <div className="plan-content-div">
                                                    <h1>
                                                        {obj.content}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )
                                    :
                                    <tr>
                                        <td colSpan="10"> 조회한 결과가 없습니다. </td>
                                    </tr>
                                }
                            </div>
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

PlanListBody.propTypes = {
};

PlanListBody.defaultProps = {
};

/* ReactElements 컴파일 */
export default PlanListBody;
// const rootHeader = document.querySelector('div#headerDiv');
// render(<CommonHeader/>, rootHeader);

// const rootBody = document.querySelector('div#mainDiv');
// render(<PlanListBody/>, rootBody);


// const rootSettingPop = document.querySelector('div#settingPopDiv');
// render(<CommonSettingPop/>, rootSettingPop);