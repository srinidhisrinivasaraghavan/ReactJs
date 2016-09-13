import {HELLO} from '../actions/types';
import logger from '../actions/logging';

const INITIAL_STATE={from:null};

var Hello= function(state = INITIAL_STATE, action){
	switch(action.type){
		case HELLO:{
			logger.info(`action: ${JSON.stringify(action)}`);
			return {...state, from:action.payload };
		}
	}
	return state;
}

export default Hello;
