import React from 'react';
import {Switch ,Route } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import Covid from './Covid.js';
import Pnt from './Pnt.js'
import Spreads from './Spreads.js'
import Symptoms from './Symptoms.js'
import Donation from './Donation.js';
import Form from './formapp.js';
const Main =() => (
	<Switch>
	<Route exact path="/" component ={LandingPage} />
	<Route path ="/Covid" component={Covid} />
	<Route path ="/Spreads" component={Spreads} />
	<Route path ="/Pnt" component={Pnt} />
	<Route path ="/Symptoms" component={Symptoms} />
	<Route path ="/Donation" component={Donation} />
        <Route path ="/formapp" component={Form}/>


	</Switch>
)

export default Main;
