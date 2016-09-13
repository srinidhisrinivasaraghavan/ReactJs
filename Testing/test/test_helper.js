import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import {expect} from 'chai';
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';
import chai from 'chai';
import chaiJquery from 'chai-jquery';

//things test helper does:
//Step1: Set up testing environment to run like a browser in a command line
//Step2: build 'renderComponent' helper that should render a react class
//Step3: build helper for simulating events
//Step4: Set up chai-jquery


//Step1: Set up testing environment to run like a browser in a command line
//make jquery work with commandline ( no real dom/browser/window)

//similar to window.document
//create fake html dom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

//hook jquery into fake dom
const $ = jquery(global.window);

//Step2: build 'renderComponent' helper that should render a react class
function renderComponent(ComponentClass, props, state){
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store ={createStore(reducers,state)} >
      <ComponentClass {...props}/>
    </Provider>);
  return $(ReactDOM.findDOMNode(componentInstance)); //produces html and wrap it in jquery
}

//Step3: build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

chaiJquery(chai, chai.util, $);

export {expect, renderComponent};
