import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { auth } from '../dal/auth';
import { IFormInputs } from '../ui/Pages/login/Login';

export const setIsLoginTC = createAsyncThunk(
  'login/setIsLogin',
  async (data: IFormInputs, { dispatch }) => {
    const response = await auth.login(data);
    try {
      dispatch(setIsLogin({ value: true }));
    } catch (e) {
      console.log(e);
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
export const authReducer = slice.reducer;
export const { setError, setIsLogin } = slice.actions;
