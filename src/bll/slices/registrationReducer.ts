import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { auth } from '../../dal/auth';

export const setRegistration = createAsyncThunk(
  'registration/setIsRegistered',
  async (param: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      const response = await auth.register(param.email, param.password);
      return { isRegistered: true };
    } catch (err) {
      const error = err as AxiosError;
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
    builder.addCase(setRegistration.fulfilled, (state, action) => {
      state.isRegistered = action.payload.isRegistered;
    });
  },
});

export type InitialStateType = {
  isRegistered: boolean;
};

export const registrationReducer = slice.reducer;
