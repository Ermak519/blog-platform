import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  token: localStorage.getItem('User_Token') || '',
  data: {},
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
