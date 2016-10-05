import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
//import {bindActionCreators} from 'redux';

import * as actions from '../../actions';
import Header from '../header';
import InputText from '../input_text';
import SubmitButton from '../submit_button';

class Signup extends Component{

	static contextTypes ={
		router :React.PropTypes.object //gets this from parent
	};

	onSubmit(props){
		this.props.signupUser(props);
	}

	renderAlert(){
		if(this.props.errorMessage){
			return (<div>Oops!{this.props.errorMessage}</div>)
	}
	}

	render(){
		const { fields: {email, password, confirmPassword}, handleSubmit} =this.props;
		return(
			<div className="col-md-12 col-lg-12">
				<form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					< InputText field={email} label="Email" />
			    < InputText field={password} label="Password" />
          < InputText field={confirmPassword} label="Confirm Password" />
					{this.renderAlert()}
					< SubmitButton text="Create" />
				</form>

			</div>
		);
	}
}

function validate(props){
	const errors={};
	if(props.password!=props.confirmPassword){
		errors.password='password dont match'
	}

	return errors;
}

function mapStateToProps(state){
	return {errorMessage: state.auth.error}
}


//reduxForm(config,mapStateToProps,mapDispatchToProps)
//reduxform injects these config on props
export default reduxForm({
	form :'SignUpForm',
	fields :['email', 'password','confirmPassword'],
	validate:validate
},mapStateToProps,actions)(Signup);
