export function movies(state = [], action){
  switch (action.type) {
    case 'FETCH_MOVIES':
      return action.trips
    default:
      return state;
  }
}

export function loading(state = {}, action){
  switch (action.type) {
    case 'MOVIES_ARE_LOADING':
        return Object.assign({}, state, {
          loading: action.loading
        });
    default:
        return state;
  }
}
