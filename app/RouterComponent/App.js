import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, Link } from 'react-router'

import Home from './Home';
import User from './User';
import About from './About';

const App = () => {
    render(){
        return (
            <div>
                <ul>
                    <li Link to="/About">About</li>
                    <li Link to="/User">User</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
const routs = (
    <Route path="/" component={App}>
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message} />
        </Route>
    </Route>
);

ReactDOM.render(<Router routes={routs} ></Router>, document.getElementById('routerContent'));

