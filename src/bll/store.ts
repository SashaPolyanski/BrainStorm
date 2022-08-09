import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './slices/appReducer';
import { authReducer } from './slices/authReducer';
import { cardsReducer } from './slices/cardsReducer';
import { packsReducer } from './slices/packsReducer';
import { passwordReducer } from './slices/passwordReducer';
import { registrationReducer } from './slices/registrationReducer';
import { userReducer } from './slices/userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  registration: registrationReducer,
  restorePassword: passwordReducer,
  userInfo: userReducer,
  packs: packsReducer,
  cards: cardsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});
export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
