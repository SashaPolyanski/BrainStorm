import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";


const InitialState = {
    email: '',
    isSend: false,
    isNewPassword: false
}


const slice = createSlice({
    name: 'password',
    initialState: InitialState,
    reducers: {
        sendEmail(state, action: PayloadAction<{ email: string, isSend: boolean }>){
            state.email = action.payload.email
            state.isSend = action.payload.isSend
        },
       setNewPassword(state, action: PayloadAction<{ isNewPassword: boolean }>){
            state.isNewPassword = action.payload.isNewPassword
        },

    }
})
export const passwordReducer = slice.reducer
export const {sendEmail, setNewPassword} = slice.actions




export const sendEmailTC = (email: string) => {
    return async (dispatch: Dispatch) => {

    }
}
export const setNewPasswordTC = (newPassword: string, token: string | undefined) => {
  return async  (dispatch: Dispatch) => {


    }
}