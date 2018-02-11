import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

// 引入 react-tap-event-plugin 避免 material-ui onTouchTap event 會遇到的問題
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store="{store}">
        <MuiThemeProvider>
            <Router>
                <Route path="/" component={Main}>
                    <IndexRoute component="{HomePageContainer}"/>
                    <Route path="/result" component={ResultPageContainer}></Route>
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
    ,document.getElementById('app')
);