import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResponseLoginType } from '../../common/types/ResponseTypes';
import { user } from '../../dal/user';

export const updateUserAvatar = createAsyncThunk(
  'user/updateAvatar',
  async (avatar: string, { dispatch }) => {
    try {
      const newAvatar = await user.updateUserAvatar(avatar);
      dispatch(changeUserAvatar({ avatar: newAvatar }));
    } catch (e) {
      console.log(e);
    }
  },
);
const slice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      _id: '',
      email: '',
      name: '',
      avatar: '',
      publicCardPacksCount: 0,
      created: '',
    },
  } as InitialStateType,
  reducers: {
    setUserInfo(state, action: PayloadAction<{ userInfo: ResponseLoginType }>) {
      state.userInfo = action.payload.userInfo;
    },
    changeUserAvatar(state, action: PayloadAction<{ avatar: string }>) {
      state.userInfo.avatar = action.payload.avatar;
    },
    changeUserName(state, action: PayloadAction<{ name: string }>) {
      state.userInfo.name = action.payload.name;
    },
  },
});
export const userReducer = slice.reducer;
export const { setUserInfo, changeUserAvatar, changeUserName } = slice.actions;
type InitialStateType = {
  userInfo: ResponseLoginType;
};
