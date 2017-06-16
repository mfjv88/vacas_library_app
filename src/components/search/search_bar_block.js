import React from 'react';
import SearchBar from './search_bar';
import jQuery from 'jquery';
import Movie from '../partials/movies';

export default class SearchBarBlock extends React.Component{
  constructor(){
    super();

    this.state = {
      movies: []
    };
  }

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

  _search(query){
    this.setState({
      movies: []
    });
    jQuery.ajax({
      method: 'GET',
      url: `/search/${query}`,
      success: (movies) => {
        movies.map((movie)=>{
          return this.setState({
          	movies: this.state.movies.concat([movie])
          });
        })
      }
    });
  }

  render(){
  	const movies = this._getMovies();

    return (
    	<div>
	    	<SearchBar searchQuery={this._search.bind(this)}/>
	    	<div className="movie-list">{movies}</div>
    	</div>
      )
  }

}