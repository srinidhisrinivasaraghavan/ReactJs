import axios from 'axios';

const FETCH_POSTS ='FETCH_POSTS';
const CREATE_POSTS ='CREATE_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=5089';

function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	console.log(request);
	return{
		type:FETCH_POSTS,
		payload:request
	}
}

 function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
	return{
		type:CREATE_POSTS,
		payload:request
	}
}

export default {FETCH_POSTS,fetchPosts,createPost,CREATE_POSTS};
