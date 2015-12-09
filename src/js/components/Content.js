var React = require('react');

var Content = React.createClass({
	getInitialState: function() {
		return {
			content: 'Application Content'
		};
	},

	componentDidMount: function() {
		setTimeout(function() {
			this.setState({
				content: 'Application Content Updated'
			});
		}.bind(this), 1000);
	},

	render: function() {
		return (
			<div className="content">{this.state.content}</div>
		);
	}
});

module.exports = Content;