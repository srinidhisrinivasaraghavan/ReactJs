import {renderComponent, expect} from '../test_helper';
import Hello from '../../src/components/hello';

describe('Hello', ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(Hello);
  });

  it('shows Hello World from React!', ()=>{
    expect(component).to.contain('Hello World from React!');
  });

  it('shows Hello World from Redux!', ()=>{
    expect(component).to.contain('Hello World from Redux!');
  });
});
