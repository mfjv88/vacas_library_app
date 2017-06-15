import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import MainNav from './components/partials/navbar';
import MovieFormBlock from './components/add/movie_form_block';
import SearchBarBlock from './components/search/search_bar_block';
import Head from 'next/head';

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
          <Head>
            <meta charset="utf-8">
            <title>Vacas Library App</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
            <link rel="stylesheet" href="/assets/css/style.css">
          </Head>
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
