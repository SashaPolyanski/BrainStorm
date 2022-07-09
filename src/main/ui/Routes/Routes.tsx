import React from "react";
import {Routes, Route} from "react-router-dom"
import ForgotPassword from "../../../features/auth/Password/ForgotPassword/ForgotPassword";
import PasswordRecovery from "../../../features/auth/Password/PasswordRecovery/PasswordRecovery";
import CheckEmail from "../../../features/auth/Password/CheckEmail/CheckEmail";

export const PATH = {
    FORGOT_PASSWORD: "/forgot",
    CHECK_EMAIL: "/check-email",
    SET_NEW_PASSWORD: "/set-new-password"
}

const RoutesComponent = () => {
    return <>
        <Routes>
            <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            <Route path={PATH.SET_NEW_PASSWORD + `/:token`} element={<PasswordRecovery/>}/>
            <Route path={PATH.CHECK_EMAIL} element={<CheckEmail/>}/>
        </Routes>
    </>
}

export default RoutesComponent