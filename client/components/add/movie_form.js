import React from 'react';

export default class MovieForm extends React.Component {
  render(){
    return(
      <form className="movie-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Add a movie</label>
        <div className="add-movie-form">
          <input placeholder="Director:" ref={(input) => this._director = input} />
          <input placeholder="Movie:" ref={(input) => this._movie = input} />
        </div>
        <div className="add-movie-actions">
          <button type="submit">
            Add movie
          </button>
        </div>
      </form>
    )
  }

  _handleSubmit(event){
    event.preventDefault();
    let director = this._director;
    let movie = this._movie;

    this.props.addMovie(director.value, movie.value);
  }
}
