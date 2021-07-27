import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './tests/reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import './css/bootstrap.min.css'
import './css/style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
