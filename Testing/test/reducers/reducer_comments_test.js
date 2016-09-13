import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/reducers_comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer', ()=>{
  it('handles action with unknown type', ()=>{
    //expect(commentReducer(undefined,action)).to.be.instanceOf(Array);
    expect(commentReducer([],{})).to.eql([]);
  });

  it(SAVE_COMMENT, ()=>{
    const action = {
      type: SAVE_COMMENT,
      payload:'comment'
    }
    expect(commentReducer([],action)).to.eql(['comment']);
  });
});
