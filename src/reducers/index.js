import { combineReducers } from 'redux';
import { movies, loading } from './movies';
// import { filters } from './filters';

const reducers = combineReducers({
  loading,
  movies
});

export default reducers;
