import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articlesData: [],
  articlesLoadingStatus: '',
  articleId: '',
  articleData: [],
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articlesLoading: (state) => {
      state.articlesLoadingStatus = 'loading';
    },
    addArticles: (state, action) => {
      state.articlesData = action.payload;
      state.articlesLoadingStatus = 'loaded';
    },
    addArticleId: (state, action) => {
      state.articleId = action.payload;
    },
    addArticleData: (state, action) => {
      state.articleData = action.payload;
    },
  },
});

const { actions, reducer } = articlesSlice;

export { reducer };
export const { articlesLoading, addArticles, addArticleId, addArticleData } = actions;
