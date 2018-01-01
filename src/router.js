import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';
import JwlryAcc from './components/Products/JwlryAcc/JwlryAcc.js';


export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={JwlryAcc} path='/jewelry-accessories'/>
    </Switch>
)