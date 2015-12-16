var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
	getInitialState: function() {
		return {
			items: [
				{title: 'Home', route: '/'},
				{title: 'About', route: '/about'},
				{title: 'Contacts', route: '/contacts'}
			]
		};
	},

	render: function() {
		return (
			<ul className="menu">
				{this.state.items.map(function(item, index) {
					return (
						<li key={index}><Link to={item.route}>{item.title}</Link></li>
					);
				})}
			</ul>
		);
	}
});

module.exports = Menu;