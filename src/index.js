import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/routes';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(<Routes store={store}/>, document.getElementById('app'));
