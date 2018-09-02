import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import main from './pages/main.jsx'


const Member = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/main" component={main}/>
            </Switch>
        </div>
    </Router>
)


const root = document.getElementById("mainDiv")
ReactDOM.render(<Member />, root)
// export default Member;


