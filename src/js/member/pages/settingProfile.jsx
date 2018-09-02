/* 기본 import */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import jQuery from 'jquery';

/* 사용자가 만든 import */
import CommonHeader from '../common/commonHeader'; //공통 메뉴
import CommonSettingPop from '../common/commonSettingPop'; //SettingPop
import CommonSettingMenu from '../common/commonSettingMenu'; //SettingPop


/* 전역변수 */
const { render } = ReactDOM;

/*************************
 * Setting
 *************************/

class SettingProfile extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            planList: [],   //여행 리스트
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
            <section>
                <article>
                    <div className="setting-div">
                        <CommonSettingMenu/>
                        <div className="setting-content">
                            <h1 className="setting-content-h1-title">프로필 편집</h1>
                            <hr className="setting-content-bar" />
                            <form>
                                
                                <div className="setting-content-div setting-profile-img">
                                    <div className="setting-content-circle">
                                        <img className="setting-content-circle-img" src="../../../assets/images/btn/user.png" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            사용자 이름
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="text" className="form-control setting-content-input" placeholder="사용자 이름" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            이메일
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="email" className="form-control setting-content-input" placeholder="이메일" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            자기소개
                                        </label>
                                    </div>
                                    <div className="setting-content-right setting-textarea">
                                        <textarea className="form-control setting-content-textarea"></textarea>
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            생일
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="text" className="form-control setting-content-input" placeholder="생일" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            성별
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="text" className="form-control setting-content-input" placeholder="성별" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            비공개
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="text" className="form-control setting-content-input" placeholder="사용자 이름" />
                                    </div>
                                </div>
                                <div className="setting-content-div">
                                    <div className="setting-content-center">
                                        <button type="button" className="form-btn bg-olive setting-btn" onclick="#">저장하기</button>
                                    </div>
                                </div>
                            </form>
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

SettingProfile.propTypes = {
};

SettingProfile.defaultProps = {
};
 
/* ReactElements 컴파일 */
const rootHeader = document.querySelector('div#headerDiv');
render(<CommonHeader/>, rootHeader);

const rootBody = document.querySelector('div#mainDiv');
render(<SettingProfile/>, rootBody);

const rootSettingPop = document.querySelector('div#settingPopDiv');
render(<CommonSettingPop/>, rootSettingPop);