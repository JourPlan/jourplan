/* 기본 import */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import jQuery from 'jquery';

/* 전역변수 */
const { render } = ReactDOM;

/*************************
 * App
 *************************/

class App extends React.Component {
    /* Render : componentWillMount() -> render() -> componentDidMount() */
    /* Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() */

    constructor(props) {
        super(props);

        this.state = {
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
                sample
            </div>
        );
    }
}

/*************************
 * prop
 *************************/

App.propTypes = {
};

App.defaultProps = {
};

/* ReactElements 컴파일 */
const root = document.querySelector('div#mainDiv');
render(<App/>, root);