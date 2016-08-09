//reducers have 2 args -> state and action
//action : reduces called when action occurs
//state: not the application state, it is local state. cannot be undefined
//note : should not mutate this state
var ActiveBook= function(state = null, action){
	switch(action.type){
		case 'BOOK_SELECTED':{
			return action.payload;
		}
	}

	//Default CASE
	return state;
}


export default ActiveBook;