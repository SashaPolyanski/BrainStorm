import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
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
});

type InitialStateType = {
  isLoading: boolean;
  loading: boolean;
};
export const appSlice = slice.reducer;
export const { setIsLoading, isLoading } = slice.actions;
