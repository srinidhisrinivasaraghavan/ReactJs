import {
    renderComponent,
    expect
} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component;
    //step 1 , 3, 5, 7, 10
    //runs before every it statement
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    //step 2
    //checking for html elements
    it('has a text area', () => {
        expect(component.find('textarea')).to.exist; //exist => the component should contain textarea
    });

    //step 4
    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    //step 6
    //checking for css class
    it('has the correct class', () => {
        expect(component).to.have.class('comment-box');
    });

    //when 2 specs are closely realted can nest them inside a describe
    describe('entering some text', () => {
        //step 8, 11
        beforeEach(()=>{
          component.find('textarea').simulate('change', 'new comment');
        });

        //step 9
        it('shows text that is entered', () => {
          expect(component.find('textarea')).to.have.value('new comment');
        });

        //step 12
        it('when submitted it clears the input', () => {
          component.simulate('submit');
          expect(component.find('textarea')).to.have.value('');
        });
    });

});
