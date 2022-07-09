import React from "react";
import emailLogo from "../../../../assets/email2.svg"
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../main/bll/store";

const CheckEmail = () => {
    // const email = useSelector<RootStateType, string | null>(state => state.password.email)

    return <>
        <h3>It-Incubator</h3>
        <img src={emailLogo} alt=""/>
        <h3>Check Email</h3>
        <p>
            We've sent an Email with instructions to
            {/*<span>{email}</span>*/}
        </p>
    </>
}

export default CheckEmail