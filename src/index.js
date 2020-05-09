import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { DataProvider } from './components/context';

ReactDOM.render(
    <DataProvider>
    <Router>
    <App />
    </Router>
    </DataProvider >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
