import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PlanList, About } from './pages';


class Plan extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}

export default Plan;