import React from 'react';
import {BrowserRouter as Router, Link, Route, browserHistory} from 'react-router-dom';
import routes from './routes';

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
      <Router routes={routes} history={browserHistory}/>
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
