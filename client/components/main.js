import React from 'react';
import MainNav from './partials/navbar';
// import MovieFormBlock from './add/movie_form_block';
// import SearchBarBlock from './search/search_bar_block';

export default class Main extends React.Component{

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
}
