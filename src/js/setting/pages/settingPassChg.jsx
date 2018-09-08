/* 기본 import */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../css/setting.css'

/* 사용자가 만든 import */
import CommonHeader from '../../common/commonHeader.jsx'; //공통 메뉴
import CommonSettingMenu from '../../common/commonSettingMenu.jsx'; //Setting왼쪽 메뉴


/* 전역변수 */
// const { render } = ReactDOM;

/*************************
 * Setting
 *************************/

class SettingPassChg extends React.Component {
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
            <div>
                <CommonHeader
                    sDiv="setting"
                />
                <section>
                    <article>
                    <div className="setting-div">
                        <CommonSettingMenu/>
                        
                        <div className="setting-content">
                            <h1 className="setting-content-h1-title">비밀번호 변경</h1>
                            <hr className="setting-content-bar" />
                            <h1 className="setting-content-h1">안전한 비밀번호로 내 정보를 보호하세요.</h1>
                            <h1 className="setting-content-h1 setting-h1-last">다른곳에서 사용하지 않는 비밀번호가 안전합니다.</h1>

                            <form>
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            이전 비밀번호
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="password" className="form-control setting-content-input" placeholder="이전 비밀번호" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            새 비밀번호
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="password" className="form-control setting-content-input" placeholder="새 비밀번호" />
                                    </div>
                                </div>
                                
                                <div className="setting-content-div">
                                    <div className="setting-content-left">
                                        <label>
                                            새 비밀번호 확인
                                        </label>
                                    </div>
                                    <div className="setting-content-right">
                                        <input type="password" className="form-control setting-content-input" placeholder="새 비밀번호 확인" />
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
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

SettingPassChg.propTypes = {
};

SettingPassChg.defaultProps = {
};
 
/* ReactElements 컴파일 */

export default SettingPassChg;
// const rootHeader = document.querySelector('div#headerDiv');
// render(<CommonHeader/>, rootHeader);

// const rootBody = document.querySelector('div#mainDiv');
// render(<SettingPassChg/>, rootBody);

// const rootSettingPop = document.querySelector('div#settingPopDiv');
// render(<CommonSettingPop/>, rootSettingPop);