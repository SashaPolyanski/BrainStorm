import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export const setRegistration = createAsyncThunk(
  'registration/setIsRegistered',
  async (param: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      // const response = await api.registration(param.email, param.password);
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

// export const { setIsRegistered } = slice.actions;

export type InitialStateType = {
  isRegistered: boolean;
};

export const registrationReducer = slice.reducer;
