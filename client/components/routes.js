import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';
import App from './app';

module.exports = (
	<App>
	  <Route path='/add_movie' component={MovieFormBlock}/>
	  <Route path='/search_movie' component={SearchBarBlock}/>
  	</App>	
);