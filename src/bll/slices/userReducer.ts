import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResponseLoginType } from '../../common/types/ResponseTypes';

const slice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      _id: '',
      email: '',
      name: '',
      avatar: '',
    },
  } as InitialStateType,
  reducers: {
    setUserInfo(state, action: PayloadAction<{ userInfo: ResponseLoginType }>) {
      // eslint-disable-next-line no-debugger
      debugger;
      state.userInfo = action.payload.userInfo;
    },
  },
});
export const userReducer = slice.reducer;
export const { setUserInfo } = slice.actions;
type InitialStateType = {
  userInfo: ResponseLoginType;
};
