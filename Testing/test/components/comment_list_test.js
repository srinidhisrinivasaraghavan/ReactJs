import {
    renderComponent,
    expect
} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;
    beforeEach(() => {
        //renderComponent(compoennt, null , props)
        const props ={ comments: ['1', '2'] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided',()=>{
        expect(component).to.contain('1');
        expect(component).to.contain('2');
    });
});
