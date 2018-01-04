import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home.js';
import JwlryAcc from './components/Products/JwlryAcc/JwlryAcc.js';
import CreateListing from './components/CreateListing/CreateListing.js'


export default (
    <Switch>
        <Route component={Home} exact path='/'/>
        <Route component={JwlryAcc} path='/jewelry-accessories'/>
        <Route component={CreateListing} path='/create-listing'/>
    </Switch>
)