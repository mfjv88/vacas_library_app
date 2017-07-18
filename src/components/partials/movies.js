import React from 'react';
import {Modal, Button} from 'react-bootstrap';

export default class Movie extends React.Component{
  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     showModal: false,
  //     editMovie: false,
  //     titleValue: this.props.title,
  //     castValue: this.props.cast,
  //     imdbValue: this.props.imdb,
  //     genresValue: this.props.genres,
  //     overviewValue: this.props.overview,
  //     poster_linkValue: this.props.poster_link,
  //     productionValue: this.props.production,
  //     release_dateValue: this.props.release_date,
  //     library_id: this.props.library_id
  //   };
  //   this.handleInputChange = this.handleInputChange.bind(this)
  // }

  _getCast(){
    return this.state.castValue.map((cast)=>{
      return(
        <li>{cast.name} as "{cast.character}"</li>
      )
    });
  }

  _getCrew(){
    return this.state.productionValue.map((crew)=>{
      if(crew.job === 'Producer'){
        return(
          <li>{crew.name} as {crew.job}</li>
        )
      }
    });
  }

  _getGenres(){
    console.log(this.state.genresValue);
    return this.state.genresValue.map((genre)=>{
      return (
        <li>{genre.name}</li>
      )
    });
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
    console.log(this.props);
    const imdb_link = 'http://www.imdb.com/title/' + this.state.imdbValue;
    const production = this.state.productionValue;
    let director;
    for (let i = 0; i < production.length; i++){
      if(production[i].job === 'Director'){
        director = production[i].name;
      }
    }
    const cast_members = this._getCast();
    const crew_members = this._getCrew();
    const genres = this._getGenres();

    let close = () => this.setState({ showModal: false});

    if(this.state.editMovie){
      // editMovie = this.props.movie;
      return(
        <div className="movie-block">
          <form className="form-inline">
            <div className="form-group">
              <label for="title">Title</label>
              <input type="text" className="form-control" id="title" placeholder="Movie:" name="titleValue" value={this.state.titleValue} ref={(input) => this._title = input} onChange={this.handleInputChange}/>
            </div>
{/*            <div className="form-group">
              <label for="director">Director</label>
              <input type="text" className="form-control" id="director" placeholder="Director:" name="directorValue" value={this.state.directorValue} ref={(input) => this._director = input} onChange={this.handleInputChange}/>
            </div>*/}
            <button className="btn btn-default" onClick={this._handleSave.bind(this)}>Save changes</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <a className="imdb_link" onClick={()=> this.setState({showModal:true})}><h3>{this.props.title}</h3></a>
            <p>
              Directed by: {director}
            </p>
            <span>
              <a onClick={this._handleDelete.bind(this)}>Delete movie</a>
            </span>
            <span>
              <a onClick={this._handleEdit.bind(this)}>Edit movie</a>
            </span>
          </div>
          <Modal
            show={this.state.showModal}
            onHide={close}
            aria-labelledby="movie_details_label"
          >
            <Modal.Header closeButton>
              <Modal.Title id="movie_details_label">Masterseeker Movie #{this.state.library_id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <h3>{this.props.title}</h3>
                  <p> Released: {this.state.release_dateValue}</p>
                  <p> Directed by: {director} </p>
                  <img className="img-responsive" src={this.state.poster_linkValue}/>
                  <p>IMDB Link: <a href={imdb_link} target="_blank" rel="noopener noreferrer">{imdb_link}</a></p>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <p>{this.state.overviewValue}</p>
                  <p>Cast:</p>
                  <ul>
                    {cast_members}
                  </ul>
                  <p>Crew:</p>
                  <ul>
                    {crew_members}
                  </ul>
                  <p> Genres: </p>
                  <ul>
                    {genres}
                  </ul>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
            </Modal.Footer>
          </Modal>
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

    let title = this._title;

    this.props.onSave(title.value, this.props.movie);
  }

  componentDidMount(){
    this._timer = setInterval(() => this.state.movies, 1000);
  }

  componentWillUnmount(){
    clearInterval(this._timer);
  }
}
