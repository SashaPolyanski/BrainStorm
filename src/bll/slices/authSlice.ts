import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { auth } from '../../dal/auth';
import { IFormInputs } from '../../ui/Pages/login/Login';

import { setIsLoading } from './appSlice';
import { setUserInfo } from './userSlice';

export const setIsLoginTC = createAsyncThunk(
  'login/setIsLogin',
  async (data: IFormInputs, { dispatch }) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      const userInfo = await auth.login(data);
      dispatch(setUserInfo({ userInfo }));
      dispatch(setIsLogin({ value: true }));
    } catch (e) {
      if (e instanceof AxiosError) {
        const error = e.response
          ? e.response.data.error
          : `${e.message}, more details in the console`;
        dispatch(setError({ error }));
      }
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);
export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  try {
    await auth.logout();
    dispatch(setIsLogin({ value: false }));
  } catch (e) {
    console.log(e);
  }
});

const slice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    error: '',
  } as InitialStateType,
  reducers: {
    setError(state, action: PayloadAction<{ error: string }>) {
      state.error = action.payload.error;
    },
    setIsLogin(state, action: PayloadAction<{ value: boolean }>) {
      state.isLogin = action.payload.value;
    },
  },
  extraReducers: builder => {},
});

type InitialStateType = {
  isLogin: boolean;
  error: string;
};
export const authSlice = slice.reducer;
export const { setError, setIsLogin } = slice.actions;
