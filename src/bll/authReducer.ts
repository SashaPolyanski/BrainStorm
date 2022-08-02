import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginReducerType } from './loginReducer';

// export const loginThunk = createAsyncThunk('auth/login')

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
    setIsLogin(state: LoginReducerType, action: PayloadAction<{ value: boolean }>) {
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
