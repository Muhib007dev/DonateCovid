import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import "../Cards/Styles/Cards.css";
class Register extends Component{

	constructor(props){
		super(props);
		
        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            State: '',
            Organization: '',
            Link: '',
        },
        errors: {}
    });

		handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
       }
       validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.State === '') errors.State = 'Name of the State cannot be blank';
        if (data.Organization === '') errors.Organization = 'Name of the Organization cannot be blank';
        if (data.Link === '') errors.Link = 'Link cannot be blank';

        return errors;
    }
		handleSubmit = (e) => {
			e.preventDefault();
			const {data }= this.state;
			const errors=this.validate;
			if (Object.keys(errors).length === 0) {
            console.log(data);
            //Call an api here
            //Resetting the form
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }
	render(){
		 const { data, errors } = this.state;
		return(
			<div>
			<h1 className="heading"> Share Your Donation Link</h1>
			<p className="heading2">Please Submit the link to the website of any NGO you know and help India to fight COVID-19 </p>

			
			<Form onSubmit={this.handleSubmit}>
				<FormGroup>
				<Label for="State">State</Label>
				<Input id ="State"  value={data.State} invalid={errors.State? true : false} name="State" onChange={this.handleChange}/>
				<FormFeedback>errors.State</FormFeedback>
				</FormGroup>
				<FormGroup>
				<Label for="Organization">Organization / NGO </Label>
				<Input id ="Organization" value={data.Organization} invalid={errors.Organization? true : false}name="Organization"  onChange={this.handleChange}/>
				<FormFeedback>errors.Organization</FormFeedback>
				</FormGroup>
				<FormGroup>
				<Label for="Link">Link to the website of NGO</Label>
				<Input id ="Link" value={data.Link} invalid={errors.Link? true : false} name="Link" onChange={this.handleChange} />
				<FormFeedback>errors.Link</FormFeedback>
				</FormGroup>
				<Button color ="primary">Submit</Button>
			</Form>
			</div>
			);
	}
}
export default Register;
