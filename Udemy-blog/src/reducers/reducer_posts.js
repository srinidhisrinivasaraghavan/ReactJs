import funtions from '../actions/index';

const INITIAL_STATE={posts:{all:[], post:null}};

export default function(state =INITIAL_STATE,action){
	//console.log('reducers', action.payload ,FETCH_POSTS,action.type );
	switch(action.type){
		case funtions.FETCH_POSTS:{
			console.log('reducers', state.posts.all.concat(action.payload.data));
			return state.posts.all.concat(action.payload.data);
		}
		case funtions.CREATE_POSTS:{
console.log('defaulr');
		}
		console.log('defaulr');
		default:return state;
	}
}