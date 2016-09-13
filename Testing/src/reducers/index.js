import { combineReducers } from 'redux';
import commentReducer from './reducers_comments';

const rootReducer = combineReducers({
  comments: commentReducer
});

export default rootReducer;
