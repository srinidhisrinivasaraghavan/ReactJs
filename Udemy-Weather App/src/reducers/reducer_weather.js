import FETCH_WEATHER from '../actions/index';

export default function(state=[],action){
	//console.log('action ',action);
	//console.log('state ',state);
	//console.log(action.type+' '+FETCH_WEATHER);
	switch(action.type){
		case FETCH_WEATHER:{
			//console.log('state',state.concat([action.payload.data]));
			return state.concat([action.payload.data]); //ES5
			//return [action.payload.data,...state]; //ES6 =>creating a new array
		}
	}
	//console.log('default');
	return state;
}

