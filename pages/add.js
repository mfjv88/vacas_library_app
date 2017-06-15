import React from 'react';
import Movie from './components/partials/movies';
import MovieForm from './components/add/movie_form';
import App from './index';

export default class MovieFormBlock extends React.Component{

  // Initial built-in React functions
  constructor(){
    super();

    this.state = {
      showMovies: false,
      movies: []
    };
  }

  // Functions for App Component
  _getMovies() {
    return this.state.movies.map((movie) => {
      return(
        <Movie
          movie={movie}
          director={movie.director}
          title={movie.title}
          movie_id={movie.movie_id}
          key={movie.movie_id}
          onDelete={this._deleteMovie.bind(this)}
          onSave={this._saveEdit.bind(this)}/>
        )
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
      title,
      director
    };

    jQuery.ajax({
      url: '/movies/add',
      method: 'POST',
      data: movie,
      success: (newMovie) => {
        this.setState({
          movies: this.state.movies.concat([newMovie])
        });
      }
    });
  }

  _deleteMovie(movie) {
    jQuery.ajax({
      method: 'DELETE',
      url: `/movies/delete/${movie.movie_id}`
    });

    const movies = [...this.state.movies];
    const movieIndex = movies.indexOf(movie);
    movies.splice(movieIndex, 1);

    this.setState({movies});
  }


  // For editing
  _saveEdit(director, title, previousData) {
    let movie_id = previousData.movie_id;
    const updatedInput = {
      title,
      director,
      "movie_id": movie_id
    };

    jQuery.ajax({
      url: `/movies/edit/${movie_id}`,
      method: 'POST',
      data: updatedInput,
      success: (updatedMovie) => {
        const movies = [...this.state.movies];
        const movieIndex = movies.indexOf(previousData);
        movies[movieIndex] = updatedMovie;

        this.setState({movies});
      }
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
      moviesNodes = <div className="movie-list">{movies}</div>;
    }

    // JSX
    return (
      <App>
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
      </App>
    );
  }
  componentWillMount(){
    this._fetchMovies();
  }

  _fetchMovies() {
    // jQuery.ajax({
    //   method: 'GET',
    //   url: 'https://api.themoviedb.org/3/movie/550/credits?api_key=4a30a8c65888c1fac2a36e456ecba9b6',
    //   success: (movies) => {
    //     movies.crew.map((crew) => {
    //       if (crew.job == 'Director' || crew.job == 'Producer') {
    //         console.log(crew);
    //       }
    //     });
    //     this.setState({movies})
    //   }
    // });

    jQuery.ajax({
      method: 'GET',
      url: '/movies',
      success: (movies) => {
        movies.map((movie)=>{
          this.setState({
            movies: this.state.movies.concat([movie])
          });
        })
      }
    });
  }


  // Built-in React functions AFTER render
  componentDidMount(){
    this._timer = setInterval(() => this.state.movies, 5000);
  }

  componentWillUnmount(){
    clearInterval(this._timer);
  }
}
