import axios from 'axios';

export const moviesAreLoading = (bool) => {
  return {type: 'MOVIES_ARE_LOADING', 'loading': bool};
}

export const fetchMovies = (dispatch) => {
  axios('/api/movies').then((movies) => {
    movies.data.map((movie)=>{
      axios('https://api.themoviedb.org/3/search/movie?api_key='+ '4a30a8c65888c1fac2a36e456ecba9b6' +'&language=en-US&query=' + movie.title + '&page=1').then((response) => {
        if (response.status !== 200) {
            throw Error('Error getting movie id: ' + response.status);
        }
        const movie_id = response.data.results[0].id;
        axios('https://api.themoviedb.org/3/movie/' + movie_id + '/credits?api_key='+ '4a30a8c65888c1fac2a36e456ecba9b6').then((response) => {
          if (response.status !== 200) {
              throw Error('Error getting crew movie info: ' + response.status);
          }
          let movie_cast = [];
          let movie_production = [];
          for (let i = 0; i < 5; i++) {
            movie_cast.push(response.data.cast[i]);
          }
          for (let j = 0; j < response.data.crew.length; j++){
            if(response.data.crew[j].job === 'Director' || response.data.crew[j].job === 'Producer'){
              movie_production.push(response.data.crew[j]);
            }
          }
          axios('https://api.themoviedb.org/3/movie/' + movie_id + '?api_key='+ '4a30a8c65888c1fac2a36e456ecba9b6' +'&language=en-US').then((response) => {
            if (response.status !== 200) {
                throw Error('Error getting extra movie info: ' + response.status);
            }
            const movie_details = response.data;
            const movie_imdb = movie_details.imdb_id;
            const movie_title = movie_details.title;
            const movie_overview = movie_details.overview;
            const movie_poster_path =  movie_details.poster_path;
            const movie_poster_link = 'http://image.tmdb.org/t/p/original/' + movie_poster_path;
            const movie_genres =  movie_details.genres;
            const movie_release_date =  movie_details.release_date;
            const return_movie = {
              cast: movie_cast,
              genres: movie_genres,
              imdb: movie_imdb,
              overview: movie_overview,
              poster_link: movie_poster_link,
              poster_path: movie_poster_path,
              production: movie_production,
              release_date: movie_release_date,
              title: movie_title,
              library_id: movie.movie_id
            };
            return dispatch({'type':'FETCH_MOVIES', 'trips': return_movie});
          });
        });
      });
    });
  })
  .catch((e) => {
    console.log(e);
  });
}
