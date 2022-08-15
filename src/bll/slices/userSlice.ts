import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ResponseLoginType } from '../../common/types/ResponseTypes';
import { user } from '../../dal/user';

export const updateUserInfo = createAsyncThunk(
  'user/updateAvatar',
  async (param: { avatar?: string; name?: string }, { dispatch }) => {
    try {
      const updateUser = await user.updateUserAvatar(param.avatar, param.name);
      dispatch(changeUserInfo({ avatar: updateUser.avatar, name: updateUser.name }));
    } catch (e) {
      console.log(e);
    }
  },
);
const slice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {
      avatar: '',
      created: '',
      email: '',
      isAdmin: false,
      name: '',
      publicCardPacksCount: 0,
      rememberMe: false,
      token: '',
      tokenDeathTime: '',
      updated: '',
      verified: false,
      __v: null,
      _id: '',
    },
  } as InitialStateType,
  reducers: {
    setUserInfo(state, action: PayloadAction<{ userInfo: ResponseLoginType }>) {
      state.userInfo = action.payload.userInfo;
    },
    changeUserInfo(state, action: PayloadAction<{ avatar?: string; name?: string }>) {
      state.userInfo.avatar = action.payload.avatar;
      if (action.payload.name) state.userInfo.name = action.payload.name;
    },
  },
});
export const userSlice = slice.reducer;
export const { setUserInfo, changeUserInfo } = slice.actions;
type InitialStateType = {
  userInfo: ResponseLoginType;
};
