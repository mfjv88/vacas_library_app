import React from 'react';

export default class Movie extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      editMovie: false,
      titleValue: this.props.title,
      directorValue: this.props.director,
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
    if(this.state.editMovie){
      // editMovie = this.props.movie;
      return(
        <div>
          <input type="text" placeholder="Director:" name="directorValue" value={this.state.directorValue} ref={(input) => this._director = input} onChange={this.handleInputChange}/>
          <input type="text" placeholder="Movie:" name="titleValue" value={this.state.titleValue} ref={(input) => this._title = input} onChange={this.handleInputChange}/>
          <button onClick={this._handleSave.bind(this)}>Save changes</button>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{this.props.title}</h3>
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
