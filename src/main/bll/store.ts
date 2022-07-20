import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { passwordReducer } from './passwordReducer';

const rootReducer = combineReducers({
  password: passwordReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
