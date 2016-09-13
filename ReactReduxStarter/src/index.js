import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Hello from './components/hello';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render( 
	<Provider store={createStoreWithMiddleware(reducers)}>
    	<Hello />
  	</Provider>,
  	document.getElementById('root')
);