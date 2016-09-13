import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions/index';

describe('actions', ()=>{
  describe('saveComment',()=>{
    //check for correct type and payload
    it('has the correct type', ()=>{
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload',()=>{
      const action = saveComment('comment');
      expect(action.payload).to.equal('comment');
    });
  });
});
