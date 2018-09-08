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

class SettingFriendReq extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            friendReqList: [],   //여행 리스트
        };
    } 

    /*************************
     * 사용자 정의 함수
     *************************/ 

    //javascript onload와 같이 render 전에 타는 내장함수
    componentWillMount(){
        let datas = [];
        
        datas.push({
            id: 'bnwwkd',     //user 아이디
            img: require('../../../images/btn/user.png'),
        });

        datas.push({
            id: 'elkinine',
            img: require('../../../images/btn/user.png'),
        });
        
        datas.push({
            id: 'sildover',
            img: require('../../../images/btn/user.png'),
        });
        
        this.setState({
            friendReqList: datas
        });
    }
    
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
                            <h1 className="setting-content-h1-title">친구요청 관리</h1>
                            <hr className="setting-content-bar" />
                            <form>
                                {this.state.friendReqList.length > 0 ?
                                    this.state.friendReqList.map((obj, index) => (
                                        <div className="setting-friend-list-id" key={index}>
                                            <div className="setting-friend-circle">
                                                    <img className="setting-friend-circle-img" src={obj.img} />
                                            </div>
                                            <div className="setting-friend-id-div">
                                                <h1>
                                                    {obj.id}
                                                </h1>
                                            </div>
                                            <a href="#">
                                                <div className="setting-friend-list-menu">
                                                    <button className="form-btn bg-olive friend-req-btn">수락</button>
                                                    <button className="form-btn bg-gray friend-req-btn">거절</button>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                    )
                                    :
                                    <tr>
                                        <td colSpan="10"> 조회한 결과가 없습니다. </td>
                                    </tr>
                                }
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

SettingFriendReq.propTypes = {
};

SettingFriendReq.defaultProps = {
};
 
/* ReactElements 컴파일 */
export default SettingFriendReq;
// const rootHeader = document.querySelector('div#headerDiv');
// render(<CommonHeader/>, rootHeader);

// const rootBody = document.querySelector('div#mainDiv');
// render(<SettingFriendReq/>, rootBody);

// const rootSettingPop = document.querySelector('div#settingPopDiv');
// render(<CommonSettingPop/>, rootSettingPop);