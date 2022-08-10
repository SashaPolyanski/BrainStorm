import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { auth } from '../../dal/auth';

import { setIsLoading } from './appSlice';

type initialType = {
  email: string;
  isSend: boolean;
  isNewPassword: boolean;
};

export const setNewPasswordTC = createAsyncThunk(
  'password/setNewPassword',
  async (param: { password: string; token?: string }, { dispatch }) => {
    const { password, token } = param;
    try {
      dispatch(setIsLoading({ loading: true }));
      const response = await auth.sendNewPassword(password, token);
      dispatch(setNewPassword({ isNewPassword: true }));
      dispatch(setIsLoading({ loading: false }));
    } catch (e) {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const sendEmailTC = createAsyncThunk(
  'email/setEmail',
  async (param: { email: string }, { dispatch }) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      const response = await auth.sendEmail(param.email);
      dispatch(sendEmail({ email: param.email, isSend: true }));
      dispatch(setIsLoading({ loading: false }));
    } catch (e) {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

const slice = createSlice({
  name: 'password',
  initialState: {
    email: '',
    isSend: false,
    isNewPassword: false,
  } as initialType,
  reducers: {
    sendEmail(state, action: PayloadAction<{ email: string; isSend: boolean }>) {
      state.email = action.payload.email;
      state.isSend = action.payload.isSend;
    },
    setNewPassword(state, action: PayloadAction<{ isNewPassword: boolean }>) {
      state.isNewPassword = action.payload.isNewPassword;
    },
  },
});
export const passwordSlice = slice.reducer;
export const { setNewPassword, sendEmail } = slice.actions;
