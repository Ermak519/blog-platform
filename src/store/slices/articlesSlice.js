import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    articlesData: [],
    articlesLoadingStatus: ''
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        articlesLoading: state => { state.articlesLoadingStatus = 'loading' },
        addArticles: (state, action) => {
            state.articlesData = action.payload;
            state.articlesLoadingStatus = 'loaded'
        }
    }
});

const { actions, reducer } = articlesSlice;

export { reducer };
export const { articlesLoading, addArticles } = actions;
