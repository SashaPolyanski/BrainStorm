import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { appSlice } from './slices/appSlice';
import { authSlice } from './slices/authSlice';
import { cardsSlice } from './slices/cardsSlice';
import { packsSlice } from './slices/packsSlice';
import { passwordSlice } from './slices/passwordSlice';
import { registrationSlice } from './slices/registrationSlice';
import { userSlice } from './slices/userSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  app: appSlice,
  registration: registrationSlice,
  restorePassword: passwordSlice,
  userInfo: userSlice,
  packs: packsSlice,
  cards: cardsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});
export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
