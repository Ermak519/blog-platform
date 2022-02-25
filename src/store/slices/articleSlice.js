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
  },
});

const { actions, reducer } = articleSlice;

export { reducer };
export const { setArticleData } = actions;
