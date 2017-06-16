import React from 'react';
import {Route} from 'react-router-dom';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';
import Main from './main';

export default class App extends React.Component{
	render(){
		return(
		<div>
			<Main>
			  <Route path='/add_movie' component={MovieFormBlock}/>
			  <Route path='/search_movie' component={SearchBarBlock}/>
		  	</Main>	
	  	</div>	
		);
	}
}