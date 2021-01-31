import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './pages/App'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/detail" component={App}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;