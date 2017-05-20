import React from 'react';

export default class Movie extends React.Component{
  render(){
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>
          Directed by: {this.props.director}
        </p>
      </div>
    );
  }
}
