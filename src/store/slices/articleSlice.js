import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
  articleData: [],
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    articleLoading: (state) => {
      state.articlesLoadingStatus = 'loading';
    },
    setArticleData: (state, action) => {
      state.articleData = action.payload;
      state.articlesLoadingStatus = 'loaded';
    },
  },
});

const { actions, reducer } = articleSlice;

export { reducer };
export const { articleLoading, setArticleData } = actions;
