//This will contain all the action creater

//Action creator : function that returns a action 
//The action returned from this will run thru all the reducers
//ACTION HAS 2 THIGS : TYPE, PAYLOAD
//Type: purpose of the action
export function selectBook(book){
	return ({
		type:'BOOK_SELECTED',  //Type : Uppercase string / Constant
		payload: book //optional
	});
}

