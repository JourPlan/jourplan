import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


import settingFriend from './pages/settingFriend.jsx'
import settingFriendReq from './pages/settingFriendReq.jsx'
import settingPassChg from './pages/settingPassChg.jsx'
import settingProfile from './pages/settingProfile.jsx'


const Setting = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/setting" component={settingFriend}/>
                <Route path="/setting/settingFriend" component={settingFriend}/>
                <Route path="/setting/settingFriendReq" component={settingFriendReq}/>
                <Route path="/setting/settingPassChg" component={settingPassChg}/>
                <Route path="/setting/settingProfile" component={settingProfile}/>
            </Switch>
        </div>
    </Router>
)


const root = document.getElementById("mainDiv")
ReactDOM.render(<Setting />, root)
// export default Member;


