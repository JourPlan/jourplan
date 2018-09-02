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

class SettingFriend extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
            friendList: [],   //친구 리스트
        };
    } 

    /*************************
     * 사용자 정의 함수
     *************************/ 

    //javascript onload와 같이 render 전에 타는 내장함수
    componentWillMount(){
        let datas = [];
        
        datas.push({
            id: 'h_880524',     //user 아이디
            img: '../../../assets/images/btn/user.png', //user 프로필 사진
        });

        datas.push({
            id: 'erica_yegang',
            img: '../../../assets/images/btn/user.png',
        });
        
        datas.push({
            id: 'jihoon_lee',
            img: '../../../assets/images/btn/user.png',
        });
        
        this.setState({
            friendList: datas
        });
    }
    
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
                            <h1 className="setting-content-h1-title">친구 관리</h1>
                            <hr className="setting-content-bar" />
                            <form>
                                {this.state.friendList.length > 0 ?
                                    this.state.friendList.map((obj, index) => (
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
                                                    <img className="setting-friend-list-menu-img" src="../../../assets/images/btn/planlistmenu.png" />
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

        );
    }
}

/*************************
 * prop
 *************************/

SettingFriend.propTypes = {
};

SettingFriend.defaultProps = {
};
 
/* ReactElements 컴파일 */
const rootHeader = document.querySelector('div#headerDiv');
render(<CommonHeader/>, rootHeader);

const rootBody = document.querySelector('div#mainDiv');
render(<SettingFriend/>, rootBody);

const rootSettingPop = document.querySelector('div#settingPopDiv');
render(<CommonSettingPop/>, rootSettingPop);