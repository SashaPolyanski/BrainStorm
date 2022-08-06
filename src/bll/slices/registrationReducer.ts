import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { auth } from '../../dal/auth';

import { setIsLoading } from './appReducer';

export const setRegistration = createAsyncThunk(
  'registration/setIsRegistered',
  async (param: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      const response = await auth.register(param.email, param.password);
      return { isRegistered: true };
    } catch (err) {
      const error = err as AxiosError;
      dispatch(setIsLoading({ loading: false }));
      return rejectWithValue(error.message);
    }
  },
);

const slice = createSlice({
  name: 'registration',
  initialState: {
    isRegistered: false,
  } as InitialStateType,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(setRegistration.fulfilled, (state, action) => {
        state.isRegistered = action.payload.isRegistered;
      })
      .addCase(setRegistration.rejected, (state, action) => {});
  },
});

export type InitialStateType = {
  isRegistered: boolean;
};

export const registrationReducer = slice.reducer;
