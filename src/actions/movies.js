export function moviesHasErrored(bool){
  return {
    type: 'MOVIE_HAS_ERRORED',
    hasErrored: bool
  };
}

export function moviesIsLoading(bool){
  return {
    type: 'MOVIES_IS_LOADING',
    isLoading: bool
  };
}

export function moviesFetchDataSuccess(movies){
  return {
    type: 'MOVIES_FETCH_DATA_SUCCESS',
    movies
  };
}

export function errorAfterFiveSeconds(){
  return (dispatch) => {
    setTimeout(() => {
      dispatch(moviesHasErrored(true));
    }, 5000);
  };
}

export function moviesFetchData(url) {
  return (dispatch) => {
    dispatch(moviesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(moviesIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((movies) =>
    dispatch(moviesFetchDataSuccess(movies)))
    .catch(() => dispatch(moviesHasErrored(true)));
  };
}
