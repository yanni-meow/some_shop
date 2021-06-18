import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { store } from './store';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory()

// store.dispatch({
//   type: "SET_STATE",
//   state: {
//     phones: [ "Xiaomi Mi 10", "Samsung Galaxy Note20" ]
//   }
// });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App /> 
    </Router>
  </Provider>,
  document.getElementById('root')
);