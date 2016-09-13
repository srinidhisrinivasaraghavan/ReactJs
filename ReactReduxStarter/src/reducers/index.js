import { combineReducers } from 'redux';
import HelloReducer from './reducers_hello';

const rootReducer = combineReducers({
	hello : HelloReducer
});

export default rootReducer;