import React from "react";
import {Routes, Route} from "react-router-dom"
import ForgotPassword from "../../../features/auth/Password/ForgotPassword/ForgotPassword";
import PasswordRecovery from "../../../features/auth/Password/PasswordRecovery/PasswordRecovery";

export const PATH = {
    FORGOT_PASSWORD: "/forgot",
    CHECK_EMAIL: "/check-email",
    PASSWORD_RECOVERY: "/password-recovery"
}


const RoutesComponent = () => {
    return <>
        <Routes>
            <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            {/*<Route path={PATH.PASSWORD_RECOVERY} element={<PasswordRecovery/>}/>*/}
            {/*<Route path={PATH.CHECK_EMAIL} element={<ForgotPassword/>}/>*/}
        </Routes>
    </>
}

export default RoutesComponent