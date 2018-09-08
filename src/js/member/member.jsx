import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import login from './pages/login.jsx'
import join from './pages/join.jsx'
import passwordReset from './pages/passwordReset.jsx'



const Member = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={login}/>
                <Route path="/login" component={login}/>
                <Route path="/join" component={join}/>
                <Route path="/passwordReset" component={passwordReset}/>
            </Switch>
        </div>
    </Router>
)


const root = document.getElementById("mainDiv")
ReactDOM.render(<Member />, root)
// export default Member;


