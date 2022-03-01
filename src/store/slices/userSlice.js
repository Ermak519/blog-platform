import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: !!localStorage.getItem('user'),
  data: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLogin = true;
      state.data = action.payload;
    },
    userLogout: (state) => {
      state.isLogin = false;
      state.token = '';
      state.data = {};
    },
    userUpdate: (state, action) => {
      state.data = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;

export { reducer };

export const { userLogin, userLogout, userUpdate } = actions;
