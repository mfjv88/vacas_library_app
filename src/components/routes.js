import React from 'react';
import {Route, Router, browserHistory, IndexRedirect} from 'react-router';
import App from './app';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';

const Routes = props => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/add_movie" component={MovieFormBlock}/>
				<Route path="/search_movie" component={SearchBarBlock}/>
			</Route>
			<Route path="*">
				<IndexRedirect to="/" />
			</Route>
		</Router>
	)
}

export default Routes