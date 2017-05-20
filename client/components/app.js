import React from 'react';
import Movie from './movies';

export default class App extends React.Component{
  render(){

    const now = new Date();

    // const movies = ['Raiders of the Ark', 'Return of the Jedi', 'Jaws'];

    return (
      <div>
        <h1>Vacas Library</h1>
        <p>
          Current time: {now.toTimeString()}
        </p>
        // {foreach (movie in movies)}
        <Movie
        director="George Lucas" title="Star Wars: A New Hope"/>
        <Movie
        director="Steven Spielberg" title="Jaws"/>
      </div>
    );
  }
}
