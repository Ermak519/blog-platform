import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  articleData: {},
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticleData: (state, action) => {
      state.articleData = action.payload;
      state.loading = false;
    },
    clearArticleData: (state) => {
      state.articleData = {};
      state.loading = true;
    },
  },
});

const { actions, reducer } = articleSlice;

export { reducer };
export const { setArticleData, clearArticleData } = actions;
