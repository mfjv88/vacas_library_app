import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MainNav from './partials/navbar';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';

export default class App extends React.Component{

  // Initial built-in React functions
  constructor(){
    super();

    this.state = {
      showMovies: false,
      movies: []
    };
  }

  render(){

    // JSX
    return (
        <div>
          <MainNav/>
          <div id='body'>
            {this.props.children}
          </div>
        </div>      
    );
  }

  componentWillMount(){
    // this._fetchMovies();
  }


  // Built-in React functions AFTER render
  componentDidMount(){
    this._timer = setInterval(() => this.state.movies, 5000);
  }

  componentWillUnmount(){
    clearInterval(this._timer);
  }
}
