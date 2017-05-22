import React from 'react';
import Movie from './movies';
import MovieForm from './movieForm';

export default class App extends React.Component{

  constructor(){
    super();

    this.state = {
      showMovies: false,
      movies: [
        {id: 1, title: 'Raiders of the Ark', director: 'Whoever'},
        {id: 2, title: 'Return of the Jedi', director: 'George Lucas'},
        {id: 3, title: 'Jaws', director: 'Steven Spielberg'},
        {id: 4, title: 'Interstellar', director: 'Christopher Nolan'}
      ]
    };
  }

  _getMovies() {

    return this.state.movies.map((movie) => {
      console.log(movie);
      return (
        <Movie
          director={movie.director} title={movie.title} key={movie.id} />
      );
    });

  }

  _getMoviesTitle(movieCount) {
    if(movieCount === 0){
      return 'No movies in list YET!'
    } else if (movieCount === 1) {
      return '1 movie in list'
    } else {
      return `${movieCount} movies in list`
    }
  }

  // onClick methods
  _handleClick() {
    this.setState({
      showMovies: !this.state.showMovies
    });
  }

  _addMovie(director, title){
    const movie = {
      id: this.state.movies.length + 1,
      title,
      director
    };

    this.setState({
      movies: this.state.movies.concat([movie])
    });
  }

  render(){

    // Variables
    const now = new Date();

    const movies = this._getMovies();

    let moviesNodes;

    let buttonText = 'Show movies';

    // Conditionals
    if(this.state.showMovies){
      buttonText = 'Hide movies';
    }

    if(this.state.showMovies){
      moviesNodes = <div className="movie-list">{movies}</div>;
    }

    // JSX
    return (
      <div>
        <h1>Vacas Library</h1>
        <p>
          Current time: {now.toTimeString()}
        </p>
        <h2> {this._getMoviesTitle(movies.length)} </h2>
        <MovieForm addMovie={this._addMovie.bind(this)}/>
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {moviesNodes}
      </div>
    );
  }
}
