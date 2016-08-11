import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  actionMethods from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component{
	componentWillMount(){
		console.log('componentWillMount', this.props.fetchPosts);
		this.props.fetchPosts();
	}
	renderPosts(){
		return(
			this.props.posts.map ((post)=>{
				return(
					<li className="list-group-item" key={post.id}>
						<span className='pull-xs-right'>
							{post.categories}
						</span>
						<strong>
							{post.title}
						</strong>
					</li>
				);
			}
		));
	}
	render(){
		return (
			//TODO: Need to display posts
		<div>
			<div className="text-xs-right">
				<Link to="posts/new" className="btn btn-primary">
					Add a Post 
				</Link>
			</div>
			<h3>Posts</h3>
			<ul className ='list-group'>
				{this.renderPosts()}
			</ul>
			List of blog posts
		</div>
		);
	}
} 

//state from reducer
function mapStateToProps(state){
	console.log('result post',state.posts);
	return {posts :state.posts.all};
}

//dispatch from action creater
function mapDispatchToProps(dispatch){
	console.log('fetchPost',actionMethods.fetchPosts);
	return bindActionCreators({fetchPosts:actionMethods.fetchPosts},dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);

//export default connect(null,{fetchPosts})(PostsIndex); //ES6
