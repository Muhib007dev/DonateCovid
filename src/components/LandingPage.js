import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
class Landing extends Component {
  render() {
  	return (
  		<div style ={{width :'100%', margin:'auto'}}>
  		<Grid className="landing-grid">
  		<Cell col ={12}>
  		<img
  			src="http://www.pngmart.com/files/11/Donate-Charity-Transparent-Background.png"
  			alt="avatar"
  			className="avatar-img"
        class="center"
  			/>
  			<div className="banner-text">
  			<h1>Donate for COVID-19</h1>
  			<hr/>
  			<p>Let’s support organisations working on the ground to provide COVID-19 relief and aid! Contribute to any of the fundraisers to support India’s fight against the coronavirus and help the less privileged during this lockdown. </p>
  			<p>This Website is made to ease your access for donating to the genuine organisations all over India.Support the noble cause </p>
  			</div>

  		</Cell>
  		</Grid>
  			
  		</div>
  		)
  }
}

export default Landing; 
