import React from 'react';

export default class Movie extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editMovie: false,
      titleValue: this.props.title,
      directorValue: this.props.director,
      castValue: this.props.cast,
      imdbValue: this.props.imdb,
      overviewValue: this.props.overview,
      poster_linkValue: this.props.poster_link,
      productionValue: this.props.production,
      release_dateValue: this.props.release_date,
    };

    this.handleInputChange = this.handleInputChange.bind(this)

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render(){
    // const imdb_link = 'www.imdb.com/title/' + this.state.imdbValue;
    if(this.state.editMovie){
      // editMovie = this.props.movie;
      return(
        <div className="movie-block">
          <form className="form-inline">
            <div className="form-group">
              <label for="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Movie:" name="titleValue" value={this.state.titleValue} ref={(input) => this._title = input} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label for="director">Director</label>
              <input type="text" className="form-control" id="director" placeholder="Director:" name="directorValue" value={this.state.directorValue} ref={(input) => this._director = input} onChange={this.handleInputChange}/>
            </div>
            <button className="btn btn-default" onClick={this._handleSave.bind(this)}>Save changes</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <a className="imdb_link" href='www.imdb.com/title/?' target="_blank"><h3>{this.props.title}</h3></a>
          <p>
            Directed by: {this.props.director}
          </p>
          <span>
            <a onClick={this._handleDelete.bind(this)}>Delete movie</a>
          </span>
          <span>
            <a onClick={this._handleEdit.bind(this)}>Edit movie</a>
          </span>
        </div>
      );
    }
  }

  _handleDelete(event){
    event.preventDefault();
    // if(confirm('Are you sure?')){
      this.props.onDelete(this.props.movie);
    // }
  }

  _handleEdit(event){
    event.preventDefault();
    this.setState({
      editMovie: true
    });
  }

  _handleSave(event){
    event.preventDefault();
    this.setState({
      editMovie: false
    });

    let director = this._director;
    let title = this._title;

    this.props.onSave(director.value, title.value, this.props.movie);
  }

  componentDidMount(){
    this._timer = setInterval(() => this.state.movies, 1000);
  }

  componentWillUnmount(){
    clearInterval(this._timer);
  }
}
