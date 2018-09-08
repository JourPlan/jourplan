import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'


import planList from './pages/planList.jsx'
import planSave from './pages/planSave.jsx'
// import planDetail from './pages/planDetail.jsx'
// import planSave from './pages/planSave.jsx'


const Plan = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/planList" component={planList}/>
                <Route path="/planSave" component={planSave}/>
            </Switch>
        </div>
    </Router>
)


const root = document.getElementById("mainDiv")
ReactDOM.render(<Plan />, root)
// export default Member;


