var React = require('react');

var NotFound = React.createClass({
	render: function() {
		return (
			<div className="not-found">
				<h1>NotFound</h1>
				<p>NotFound page content.</p>
			</div>
		);
	}
});

module.exports = NotFound;