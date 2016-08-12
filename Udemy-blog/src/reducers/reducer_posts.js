import {FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_STATE={all:[], post:null};

export default function(state =INITIAL_STATE,action){
	//console.log('reducers', action.payload ,FETCH_POSTS,action.type );
	switch(action.type){
		case FETCH_POSTS:{
			console.log('reducers', action);
       		return { ...state, all: action.payload.data };
			//return state.posts.all.concat(action.payload.data);
		}
		case FETCH_POST:{
			return {...state,post:action.payload.data};
		}
		console.log('default');
		default:return state;
	}
}