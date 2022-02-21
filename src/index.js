import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { reducer as articles } from './store/slices/articlesSlice';
import { reducer as user } from './store/slices/userSlice';

import { App } from './components/App';

const store = configureStore({
  reducer: { articles, user },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
