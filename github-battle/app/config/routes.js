//maps url to certain components

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var Default = require('../components/Default');

var routes =(
<Router history={hashHistory}>
	<Route path='/' component={Main}>
		<IndexRoute component={Default} />
		<Route path='/home' component={Home} />
	</Route>
	
</Router>
);

module.exports = routes;
