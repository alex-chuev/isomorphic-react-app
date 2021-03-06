var React = require('react');

var Menu = require('./Menu');

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<Menu />

				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = App;