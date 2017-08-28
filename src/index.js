import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/Routes';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('app'));
