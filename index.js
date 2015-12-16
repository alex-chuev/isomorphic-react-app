var express = require('express');

var React = require('react');
var ReactRouter = require('react-router');
var ReactDomServer = require('react-dom/server');
var RoutingContext = require('react-router').RoutingContext;

var routes = require('./dist/js/components/routes');

var app = express()
	.set('view engine', 'jade')
	.use(express.static('dist'));

app.get('*', function(req, res) {
	ReactRouter.match({
		routes: routes(),
		location: req.url
	}, function(error, redirectLocation, renderProps) {
		res.render('index.jade', {
			app: ReactDomServer.renderToString(
				React.createElement(RoutingContext, renderProps)
			)
		});
	});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	if(host === '::') {
		host = 'localhost';
	}

	console.log('Open on your browser http://%s:%s', host, port);
});