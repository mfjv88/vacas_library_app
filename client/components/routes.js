import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './app';
import Main from './main';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';

module.exports = (
			<Main path="/">
			<Switch>
			  <Route path='/add_movie' component={MovieFormBlock}/>
			  <Route path='/search_movie' component={SearchBarBlock}/>
			  </Switch>
		  	</Main>
);