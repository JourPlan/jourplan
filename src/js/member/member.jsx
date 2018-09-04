import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import login from './pages/login.jsx'
import join from './pages/join.jsx'
import passwordReset from './pages/passwordReset.jsx'

// import settingFriend from './pages/settingFriend.jsx'
// import settingFriendReq from './pages/settingFriendReq.jsx'
// import settingPassChg from './pages/settingPassChg.jsx'
// import settingProfile from './pages/settingProfile.jsx'


const Member = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={login}/>
                <Route path="/login" component={login}/>
                <Route path="/join" component={join}/>
                <Route path="/passwordReset" component={passwordReset}/>

                {/* <Route path="/settingFriend" component={settingFriend}/>
                <Route path="/settingFriendReq" component={settingFriendReq}/>
                <Route path="/settingPassChg" component={settingPassChg}/>
                <Route path="/settingProfile" component={settingProfile}/> */}
            </Switch>
        </div>
    </Router>
)


const root = document.getElementById("mainDiv")
ReactDOM.render(<Member />, root)
// export default Member;


