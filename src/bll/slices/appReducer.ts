import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
  } as InitialStateType,
  reducers: {
    setIsLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.isLoading = action.payload.loading;
    },
  },
});

type InitialStateType = {
  isLoading: boolean;
};
export const appReducer = slice.reducer;
export const { setIsLoading } = slice.actions;
