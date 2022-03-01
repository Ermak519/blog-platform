import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articlesData: [],
  loading: true,
  pages: 0,
  offset: 0,
  page: 1,
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: (state, action) => {
      state.articlesData = action.payload.articles;
      state.pages = action.payload.pages;
      state.loading = false;
    },
    offsetArticles: (state, action) => {
      state.offset = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

const { actions, reducer } = articlesSlice;

export { reducer };
export const { addArticles, offsetArticles, setPage } = actions;
