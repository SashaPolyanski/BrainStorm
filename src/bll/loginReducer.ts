import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { auth } from '../dal/auth';
import { IFormInputs } from '../ui/Pages/login/Login';

import { setIsLogin } from './authReducer';

export type LoginReducerType = {
  isLogin: boolean;
};

// thunk creator
export const setIsLoginTC = createAsyncThunk(
  'login/setIsLogin',
  async (data: IFormInputs, thunkAPI) => {
    try {
      const response = await auth.login(data);
      console.log(response);
      if (response.statusText == 'OK') {
        thunkAPI.dispatch(setIsLogin({ value: true }));
      }
    } catch (error) {
      console.error(error);
    }
  },
);

// slice creator
const slice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
  } as LoginReducerType,
  reducers: {},
});

export const loginReducer = slice.reducer;
