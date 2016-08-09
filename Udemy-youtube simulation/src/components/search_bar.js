import React, {Component} from 'react';

//Create class-based component
class SearchBar extends Component{
	constructor(props){
		super(props);
		//Creating a state
		this.state={searchTerm:''};
		this.onInputChange=this.onInputChange.bind(this);
	}

	render(){
		return (
			<div>
				<input className="search-bar col-md-6" value={this.state.term} onChange={this.onInputChange} />
			</div>
			);
	}

	//on/handle Element Event -Triggered whenever change
	onInputChange(event){
		//changing the state
		this.setState({searchTerm:event.target.value});
		this.props.onSearchTermChange(event.target.value);
	}
}

//Export the component for other components to user this
export default SearchBar;