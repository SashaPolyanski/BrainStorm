import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { authReducer } from './authReducer';
import { registrationReducer } from './registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});
export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppRootActionsType = Parameters<typeof rootReducer>[1];

export type AppDispatchType = ThunkDispatch<
  AppRootStateType,
  unknown,
  AppRootActionsType
>;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppRootStateType,
  unknown,
  AppRootActionsType
>;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
export const useAppDispatch: () => AppDispatchType = useDispatch;
