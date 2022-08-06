import { AppRootStateType } from '../store';

export const selectIsAuth = (state: AppRootStateType) => state.auth.isLogin;
export const selectLoading = (state: AppRootStateType) => state.app.isLoading;
export const selectEmail = (state: AppRootStateType) => state.restorePassword.email;
export const selectIsSend = (state: AppRootStateType) => state.restorePassword.isSend;
export const selectUserName = (state: AppRootStateType) => state.userInfo.userInfo.name;
export const selectUserEmail = (state: AppRootStateType) => state.userInfo.userInfo.email;
export const selectUserAvatar = (state: AppRootStateType) =>
  state.userInfo.userInfo.avatar;
