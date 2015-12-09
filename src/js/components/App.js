var React = require('react');

var Header = require('./Header');
var Content = require('./Content');
var Footer = require('./Footer');

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<Header />
				<Content />
				<Footer />
			</div>
		);
	}
});

module.exports = App;