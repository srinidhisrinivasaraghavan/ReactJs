import React, {Component} from 'react';
import {connect} from 'react-redux';
//Below import take the actions and give it to all reducers
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

//because BookList needed the Application state it got promoted to Container
class BookList extends Component{
	renderList(){
		return this.props.books.map(function(book){
			return(
				<li
				 key={book.title} 
				 onClick={()=> this.props.selectBook(book)}
				 className="list-group-item">
				 {book.title}
				 </li>
			);
		},this);
	}
	render(){
		return(
			<ul className='list-group col-sm-4'>
				{this.renderList()}
			</ul>
		);
	}
}

//Takes application state as an arg and the object returned from this function is props for BookList container
function mapStateToProps(state){
	return(
		{
			books: state.books
		}
	);
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
	//Whenever selectbook is called the result should be passed to all of the reducers
	//dispatch function takes all the action and gives it to the reducers
	return bindActionCreators({selectBook:selectBook}, dispatch);
}

//connect takes function + component to produce a container
//needs to know about the dispatch method and make the selectBook available as the prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);