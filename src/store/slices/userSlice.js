import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  API_key: '',
  data: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLogin = true;
      state.API_key = action.payload;
    },
    userLogout: (state) => {
      state.isLogin = false;
      state.API_key = '';
    },
  },
});

const { actions, reducer } = userSlice;

export { reducer };

export const { userLogin, userLogout } = actions;
