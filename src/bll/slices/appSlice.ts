import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { auth } from '../../dal/auth';

import { setIsLogin, setUserId } from './authSlice';
import { setUserInfo } from './userSlice';

export const initializeApp = createAsyncThunk(
  'app/initializeApp',
  async (_, { dispatch }) => {
    try {
      const { data } = await auth.me();
      dispatch(setIsLogin({ value: true }));
      dispatch(setUserInfo({ userInfo: data }));
      dispatch(setUserId({ id: data._id }));
      return { isInitializedApp: true };
    } catch (e) {
      console.log(e);
    }
  },
);

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    isInitializedApp: false,
    loading: false,
  } as InitialStateType,
  reducers: {
    setIsLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.isLoading = action.payload.loading;
    },
    isLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.loading = action.payload.loading;
    },
  },
  extraReducers: builder => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      if (action.payload) {
        state.isInitializedApp = action.payload.isInitializedApp;
      }
    });
  },
});

type InitialStateType = {
  isLoading: boolean;
  loading: boolean;
  isInitializedApp: boolean;
};
export const appSlice = slice.reducer;
export const { setIsLoading, isLoading } = slice.actions;
