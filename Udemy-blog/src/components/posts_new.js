import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {createPost} from '../actions/index';

class PostsNew extends Component{
	static contextTypes ={
		router :React.PropTypes.object //gets this from parent
	};

	onSubmit(props){
		this.props.createPost(props) //this returns the promise from action , when successfull navigate
		.then(()=>{
			//blog post has been created. Navigate user to index
			this.context.router.push('/');
		});
	}
	render(){
		const { fields: {title,categories,content}, handleSubmit} =this.props; //ES6
		//const title = this.props.title //ES5
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' :'' }`}>
					<label>Title</label>
					<input type='text' className='form-control' {...title}/>
					<div className='text-help'>
						{title.touched?title.error:''}
					</div>
				</div>
				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' :'' }`}>
					<label>Categories</label>
					<input type='text' className='form-control' {...categories}/>
					<div className='text-help'>
						{categories.touched?categories.error:''}
					</div>
				</div>
				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' :'' }`}>
					<label>Content</label>
					<textarea type='text' className='form-control' {...content}/>
					<div className='text-help'>
						{content.touched?content.error:''}
					</div>
				</div>
				<button type='submit' className='btn btn-primary'>Submit</button>
				<Link className='btn btn-danger' to='/'>Cancel</Link>
			</form>
		);
	}
}

//If errors object has a key that matches any input, then that field is invalid, Therefore the form is also invalid
function validate(values){
	const errors={};
	if(!values.title){
		errors.title="Enter a title";
	}
	if(!values.categories){
		errors.categories="Enter a Category";
	}
	if(!values.content){
		errors.content="Enter  content";
	}
	return errors;
}

//reduxForm(config,mapStateToProps,mapDispatchToProps)
//reduxform injects these config on props
export default reduxForm({
	form :'PostsNewForm',
	fields :['title', 'categories', 'content'],
	validate
},null,{createPost})(PostsNew);