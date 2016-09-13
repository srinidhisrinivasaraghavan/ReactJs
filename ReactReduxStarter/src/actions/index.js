import {HELLO} from '../actions/types';
import logger from '../actions/logging';

export function hello(from){
	logger.info(`In action`);
	return{
		type:HELLO,
		payload:from
	}
}
