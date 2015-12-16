var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./App');
var Home = require('./Home');
var About = require('./About');
var Contacts = require('./Contacts');
var NoFound = require('./NotFound');

module.exports = function(history) {
	return (
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="about" component={About}/>
				<Route path="contacts" component={Contacts}/>
				<Route path="*" component={NoFound}/>
			</Route>
		</Router>
	)
};
