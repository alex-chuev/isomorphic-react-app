var ReactDOM = require('react-dom');
var createBrowserHistory = require('history/lib/createBrowserHistory');

var routes = require('./components/routes');

var history = createBrowserHistory();

ReactDOM.render(routes(history), document.getElementById('app'));
