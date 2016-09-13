import {expect} from '../test_helper';
import Hello from '../../src/reducers/reducers_hello';
import {HELLO} from '../../src/actions/types';

describe('Hello Reducer', ()=>{
  it('handles action with unknown type', ()=>{
    //expect(commentReducer(undefined,action)).to.be.instanceOf(Array);
    expect(Hello(null,{})).to.eql(null);
  });

  const payload ='react is cool';
  const expectedPayload ={from : payload};
  it(HELLO, ()=>{
    const action = {
      type: HELLO,
      payload:payload
    }
    expect(Hello(null,action)).to.eql(expectedPayload);
  });
});
