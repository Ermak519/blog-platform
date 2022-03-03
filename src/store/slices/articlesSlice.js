import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articlesData: [],
  articlesLoading: true,
  pages: 0,
  offset: 0,
  page: 1,
  articleLoading: true,
  articleData: {},
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: (state, action) => {
      state.articlesData = action.payload.articles;
      state.pages = action.payload.pages;
      state.articlesLoading = false;
    },
    offsetArticles: (state, action) => {
      state.offset = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setArticleData: (state, action) => {
      state.articleData = action.payload;
      state.articleLoading = false;
      state.articlesLoading = true;
    },
    clearArticleData: (state) => {
      state.articleData = {};
      state.articleLoading = true;
    },
  },
});

const { actions, reducer } = articlesSlice;

export { reducer };

export const { addArticles, offsetArticles, setPage, setArticleData, clearArticleData } = actions;
