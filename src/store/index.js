import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { reducer as articles } from './slices/articlesSlice';
import { reducer as user } from './slices/userSlice';

const store = configureStore({
  reducer: { articles, user },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
