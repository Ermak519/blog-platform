import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  articlesData: [],
  articlesLoadingStatus: '',
  pages: 0,
  currentPage: 1,
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
    setNumbersOfPages: (state, actions) => {
      state.pages = actions.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

const { actions, reducer } = articlesSlice;

export { reducer };
export const { articlesLoading, addArticles, setNumbersOfPages, setCurrentPage } = actions;
