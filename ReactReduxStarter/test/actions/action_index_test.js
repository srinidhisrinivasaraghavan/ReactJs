import {expect} from '../test_helper';
import {HELLO} from '../../src/actions/types';
import {hello} from '../../src/actions/index';

describe('actions', ()=>{
  describe('hello',()=>{
    //check for correct type and payload
    it('has the correct type', ()=>{
      const action = hello();
      expect(action.type).to.equal(HELLO);
    });


    const payload='Redux';
    it('has the correct payload',()=>{
      const action = hello(payload);
      expect(action.payload).to.equal(payload);
    });
  });
});
