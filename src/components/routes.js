import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';
import MovieFormBlock from './MovieFormBlock';
import SearchBarBlock from './SearchBarBlock';

export const routes = (
		<Route path="/" component={App}>
			<Route path="/add_movie" component={MovieFormBlock}/>
			<Route path="/search_movie" component={SearchBarBlock}/>
		</Route>
);

export class Root extends React.Component {
  render() {
		const store = this.props.store;
    return (
      <Provider store={store}>
		    <Router history={browserHistory} children={routes}/>
		  </Provider>
    );
  }
}
