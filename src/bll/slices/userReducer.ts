import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    _id: 0,
  } as InitialStateType,
  reducers: {
    setEmail(state, action: PayloadAction<{ email: string }>) {
      state.email = action.payload.email;
    },
  },
});
export const userReducer = slice.reducer;
export const { setEmail } = slice.actions;
type InitialStateType = {
  email: string;
  _id: number;
};
