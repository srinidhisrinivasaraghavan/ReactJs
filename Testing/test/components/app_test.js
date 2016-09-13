import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

//use describe group together similar tests
//here App is a string -- > like a name for reporting
describe('App', ()=>{
  let component;

  beforeEach(()=>{
    //create an instance of the App
    component = renderComponent(App);
  });

  //use it to test a single attribute of a target ( one single test )
  //here again a string is written which is a name for reporting
  it('shows the correct text', ()=>{
    //use expect to make an assertion about a target
    expect(component).to.contain('React simple starter'); //component should contain the text
  });

  it('shows a comment box', ()=>{
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list',()=>{
    expect(component.find('.comment-list')).to.exist;
  });
});
