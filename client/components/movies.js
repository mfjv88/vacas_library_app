import React from 'react';

export default class Movie extends React.Component{
  render(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          Directed by: {this.props.director}
        </p>
        <a href="#" onClick={this._handleDelete.bind(this)}>Delete movie</a>
      </div>
    );
  }

  _handleDelete(event){
    event.preventDefault();
    if(confirm('Are you sure?')){
      this.props.onDelete(this.props.movie);
    }
  }
}
