import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch,browserHistory
} from 'react-router-dom'


import planList from './pages/planList.jsx'
import planSave from './pages/planSave.jsx'
import planDetail from './pages/planDetail.jsx'


const Plan = () => (
    <Router history={browserHistory}>
        <div>
            <Switch>
                <Route exact path="/plan" component={planList}/>
                <Route path="/plan/planList" component={planList}/>
                <Route path="/plan/planDetail/:cnt" component={planDetail}/>
                <Route path="/plan/planSave" component={planSave}/>
            </Switch>
        </div>
    </Router>
)


const root = document.getElementById("mainDiv")
ReactDOM.render(<Plan />, root)
// export default Member;


