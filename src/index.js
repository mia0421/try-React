import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// 引入 react-tap-event-plugin 避免 material-ui onTouchTap event 會遇到的問題
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/Main/Main';
import HomePageContainer from './containers/HomePage/HomePage';
import ResultPageContainer from './containers/ResultPage/ResultPage';
import store from './store/configureSotore';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router path="/" component={Main}>
                <Switch>
                    <Route path="/" component={HomePageContainer}/>
                    <Route path="/result" component={ResultPageContainer}></Route>
                </Switch>
            </Router>
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('app')
);