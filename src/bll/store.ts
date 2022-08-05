import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { authReducer } from './authReducer';
import { passwordReducer } from './passwordReducer';
import { registrationReducer } from './registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
  register: passwordReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});
export type AppRootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
