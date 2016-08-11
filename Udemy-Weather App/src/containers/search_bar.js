import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; 
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={term:''};
	}
	handleInputChange(event){
		this.setState({term:event.target.value});
	}
	handleFormSubmit(event){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term:''});
	}
	render(){
		return(
			<form onSubmit={this.handleFormSubmit.bind(this)} className='input-group'>
				<input
					className='form-control' 
					placeholder='Get forecast in your fav city' 
					value={this.state.term} 
					onChange={this.handleInputChange.bind(this)} />
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		);
	}
}

//to link between the container and action
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather:fetchWeather},dispatch);
}

//connect(mapStateToProps,mapDispatchToProps)(container)
export default connect(null,mapDispatchToProps) (SearchBar);