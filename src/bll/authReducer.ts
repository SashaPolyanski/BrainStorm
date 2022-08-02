import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  },
  extraReducers: builder => {},
});

type InitialStateType = {
  isLogin: boolean;
  error: string;
};
export const authReducer = slice.reducer;
export const { setError } = slice.actions;
