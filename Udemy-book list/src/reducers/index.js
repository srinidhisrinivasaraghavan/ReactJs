import { combineReducers } from 'redux';
import BooksReducer from './reducers_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //this books and activeBook is added to the Global application state which can be used in the containers
  books:BooksReducer,
  activeBook : ActiveBook
});

export default rootReducer;
