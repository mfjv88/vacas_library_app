import { connect } from 'react-redux';
import { moviesFetchData } from '../actions/movies';

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    hasErrored: state.moviesHasErrored,
    isLoading: state.moviesIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(moviesFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
