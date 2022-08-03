import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';

type initialType = {
  email: string;
  isSend: boolean;
  isNewPassword: string;
};

const InitialState: initialType = {
  email: '',
  isSend: false,
  isNewPassword: '',
};

const slice = createSlice({
  name: 'password',
  initialState: InitialState,
  reducers: {
    sendEmail(state, action: PayloadAction<{ email: string; isSend: boolean }>) {
      state.email = action.payload.email;
      state.isSend = action.payload.isSend;
    },
    setNewPassword(state, action: PayloadAction<{ isNewPassword: string }>) {
      // eslint-disable-next-line no-debugger
      state.isNewPassword = action.payload.isNewPassword;
    },
  },
});
export const passwordReducer = slice.reducer;
export const { setNewPassword } = slice.actions;
// export const sendEmailTC = (email: string) => async (dispatch: Dispatch) => {};

//= =======================TC=============================

export const setNewPasswordTC = createAsyncThunk(
  'password/setNewPassword',
  async (param: { password: string; token?: string }, { dispatch }) => {
    try {
      dispatch(setNewPassword({ isNewPassword: param.password }));
      // eslint-disable-next-line no-empty
    } catch (e) {}
  },
);
