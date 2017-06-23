import React from 'react';
import {Route, Router, browserHistory, Redirect} from 'react-router';
import App from './app';
import MovieFormBlock from './add/movie_form_block';
import SearchBarBlock from './search/search_bar_block';
import Login from './login/login';
import { logout } from '../config/helpers'
import { firebaseAuth } from '../config/auth'

function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/add_movie' />}
    />
  )
}

export default class Routes extends React.Component {
	constructor(){
	super();

	this.state = {
	    authed: false,
	    loading: true
	 };
	}
	  
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener();
  }

  render() {
  	return (
  		<Router history={browserHistory}>
  			<Route path="/" component={App}>
  				<PrivateRoute authed={this.state.authed} path="/add_movie" component={MovieFormBlock}/>
  				<PublicRoute authed={this.state.authed} path="/search_movie" component={SearchBarBlock}/>
  				<PublicRoute authed={this.state.authed} path="/login" component={Login}/>
  			</Route>
  		</Router>
  	)
  }
}

/*{this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="navbar-brand">Logout</button>
                    : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}*/
