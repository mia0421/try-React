import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from './Home';
import User from './User';
import About from './About';

const HomePage = () => (
    <Router>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/user:id" component={User} ></Route>
        </Switch>
    </Router>
);

export default HomePage;

