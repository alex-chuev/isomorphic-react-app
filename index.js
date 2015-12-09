var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var App = require('./dist/js/components/App');

var app = express();

app.set('view engine', 'jade');

app.use(express.static('dist'));

app.get('/', function (req, res) {
	res.render('./index.jade', {
		app: ReactDOMServer.renderToString(React.createElement(App))
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	if(host === '::') {
		host = 'localhost';
	}

	console.log('Open on your browser http://%s:%s', host, port);
});