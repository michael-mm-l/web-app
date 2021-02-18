import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './pages/App'
import Home from './pages/Home'
import MyCanvas  from './pages/MyCanvas'


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/detail" component={Home} />
            <Route path="/mycanvas" component={ MyCanvas}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;