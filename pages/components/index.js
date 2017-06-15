import React from 'react';
import ReactDOM from 'react-dom';
// import BrowserRouter from 'react-router';
import {Route, BrowserRouter as Router, browserHistory} from 'react-router-dom';
import App from './components/app';
import MovieFormBlock from './components/add/movie_form_block';
import SearchBarBlock from './components/search/search_bar_block';
import routes from './components/routes'

export default class extends React.Component {
		render(){
			return (
				<App>
				  <Route path='/add_movie' component={MovieFormBlock}/>
				  <Route path='/search_movie' component={SearchBarBlock}/>
			  	</App>
		  	)
		}
}