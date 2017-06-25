import React from 'react';
import Movie from '../partials/movies';
import axios from 'axios';
import MovieForm from './movie_form';

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
        axios('https://api.themoviedb.org/3/search/movie?api_key=4a30a8c65888c1fac2a36e456ecba9b6&language=en-US&query=' + movie.title + '&page=1').then((movie_details) => {
            const first_movie = movie_details.data.results[0];
            const movie_id = first_movie.id;
            const movie_title = first_movie.original_title;
            const movie_overview = first_movie.overview;
            const movie_poster_path =  first_movie.poster_path;
            const movie_poster_link = 'http://image.tmdb.org/t/p/original/' + movie_poster_path;
            const movie_genre_ids =  first_movie.genre_ids;
            const movie_release_date =  first_movie.release_date;
            axios('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?api_key=4a30a8c65888c1fac2a36e456ecba9b6').then((movie_crew) => {
              let movie_cast = [];
              let movie_production = [];
              for (let i = 0; i < 5; i++) {
                movie_cast.push(movie_crew.data.cast[i]);
              }
              for (let j = 0; j < movie_crew.data.length; j++){
                if(movie_crew.data.crew[j].job == 'Director' || movie_crew.data.crew[j].job == 'Producer'){
                  movie_production.push(movie_crew.data.crew[j]);
                }
              }
              axios('http://www.omdbapi.com/?t=' + movie_title + '&apikey=7535f348').then((movie_omdb) => {
                const movie_imdb = movie_omdb.data.imdbID;
                const return_movie = {
                  cast: movie_cast,
                  genre_ids: movie_genre_ids,
                  imdb: movie_imdb,
                  overview: movie_overview,
                  poster_link: movie_poster_link,
                  poster_path: movie_poster_path,
                  production: movie_production,
                  release_date: movie_release_date,
                  title: movie_title
                };
                return(
                  <Movie
                    movie={movie}
                    cast={return_movie.cast}
                    director={movie.director}
                    imdb={return_movie.imdb}
                    overview={return_movie.overview}
                    poster_link={return_movie.poster_link}
                    production={return_movie.production}
                    release_date={return_movie.release_date}
                    title={movie.title}
                    movie_id={movie.movie_id}
                    key={movie.movie_id}
                    onDelete={this._deleteMovie.bind(this)}
                    onSave={this._saveEdit.bind(this)}/>
                )
              });
            });
            // http://image.tmdb.org/t/p/original//fMC8JBWx2VjsJ53JopAcFjqmlYv.jpg
            // movies.crew.map((crew) => {
            //   if (crew.job == 'Director' || crew.job == 'Producer') {
            //     console.log(crew);
            //   }
            // });
        });
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

    axios({
      method: 'post',
      url: '/api/movies/add',
      data: movie
    }).then((newMovie) => {
      this.setState({
        movies: this.state.movies.concat([newMovie.data])
      });
    });

  }

  _deleteMovie(movie) {
    axios.delete(`/api/movies/delete/${movie.movie_id}`);

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

    axios({
      method: 'post',
      url: `/api/movies/edit/${movie_id}`,
      data: updatedInput
    }).then((updatedMovie) => {
        const movies = [...this.state.movies];
        const movieIndex = movies.indexOf(previousData);
        movies[movieIndex] = updatedMovie.data;

        this.setState({movies});
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
  componentWillMount(){
    this._fetchMovies();
  }

  _fetchMovies() {
    axios('/api/movies').then((movies) => {
        movies.data.map((movie)=>{
          return this.setState({
            movies: this.state.movies.concat([movie])
          });
        })
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
