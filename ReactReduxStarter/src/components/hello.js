import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {hello} from '../actions/index';
import logger from '../actions/logging';

class Hello extends Component{
	componentWillMount(){	
		logger.info('Component mounting');
		this.props.hello("Redux");	
	}
	render(){
		return(
			<div>
				<h2>Hello World from React!</h2>
				<h2>Hello World from {this.props.from}!</h2>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {from :state.hello.from};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({hello:hello},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);
