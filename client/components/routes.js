import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MainNav from './partials/navbar';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';

// const routes = ``;

// export default class Routes extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<Route path='/add_movie' component={MovieFormBlock}/>
// 				<Route path='/search_movie' component={SearchBarBlock}/>
// 			</div>
// 		);
// 	}
// }

// module.exports = (``);

module.exports = (
	<div>
          <MainNav/>
          <div id='body'>
    	    <Route path='/add_movie' component={MovieFormBlock}/>
			<Route path='/search_movie' component={SearchBarBlock}/>
          </div>
    </div>
);