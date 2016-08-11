import React from 'react';
import {Route, IndexRoute} from 'react-route';
import App from './components/app';

const Greeting =() =>{
	return (
		<div>Hey</div>
	);
}

export default(
<Route path='/' component={Greeting}>
	<Route path='greet' component={Greeting} />
	<Route path='greet2' component={Greeting} />
	<Route path='greet3' component={Greeting} />
</Route>
);