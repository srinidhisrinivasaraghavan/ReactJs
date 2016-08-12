import axios from 'axios';

export const FETCH_POSTS ='FETCH_POSTS';
export const FETCH_POST ='FETCH_POST';
export const CREATE_POSTS ='CREATE_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=5089';

export function fetchPosts(){
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	//console.log('......request get......',request);
	return{
		type:FETCH_POSTS,
		payload:request
	}
}

 export function createPost(props){
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);
	//console.log('......request create......',request);
	return{
		type:CREATE_POSTS,
		payload:request
	}
}

export function fetchPost(id){
	const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
	//console.log('......request getOne......',request);
	return{
		type:FETCH_POST,
		payload:request
	}
}

