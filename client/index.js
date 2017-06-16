import React from 'react';
import ReactDOM from 'react-dom';
// import BrowserRouter from 'react-router';
import {Route, BrowserRouter as Router, browserHistory, Switch} from 'react-router-dom';
import App from './components/app';
import MovieFormBlock from './components/add/movie_form_block';
import SearchBarBlock from './components/search/search_bar_block';
import routes from './components/routes'

ReactDOM.render((
	<Router history={browserHistory}>
		<div>
			<Switch>
				<App path="/"/>
			</Switch>
		</div>
	</Router>
	), document.getElementById('app'));