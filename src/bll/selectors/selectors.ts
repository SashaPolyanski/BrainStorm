import { AppRootStateType } from '../store';

export const selectIsAuth = (state: AppRootStateType) => state.auth.isLogin;
export const authError = (state: AppRootStateType) => state.auth.error;
export const selectLoadingApp = (state: AppRootStateType) => state.app.isLoading;
export const selectEmail = (state: AppRootStateType) => state.restorePassword.email;
export const selectIsSend = (state: AppRootStateType) => state.restorePassword.isSend;
export const selectPacks = (state: AppRootStateType) => state.packs;
export const selectCards = (state: AppRootStateType) => state.cards;
export const selectUserId = (state: AppRootStateType) => state.userInfo.userInfo._id;
export const selectUser = (state: AppRootStateType) => state.userInfo.userInfo;
export const selectMinValue = (state: AppRootStateType) => state.packs.min;
export const selectMaxValue = (state: AppRootStateType) => state.packs.max;
export const selectLoading = (state: AppRootStateType) => state.app.loading;
