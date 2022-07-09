import {combineReducers} from "redux";
import {passwordReducer} from "./passwordReducer";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"


const rootReducer = combineReducers({
    password: passwordReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootStateType = ReturnType<typeof rootReducer>



//@ts-ignore
window.store = store