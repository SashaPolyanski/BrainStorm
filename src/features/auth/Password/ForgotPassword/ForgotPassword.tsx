import React, { ChangeEvent } from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../main/ui/Routes/Routes";
import {sendEmailTC} from "../../../../main/bll/passwordReducer";

const ForgotPassword = () => {
    const [currentValue, setCurrentValue] = React.useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> ) => {
        setCurrentValue(e.currentTarget.value)
    }
    const onClickHandler = ( ) => {
        sendEmailTC(currentValue)
    }

    return <>
        <div>

            <h3>It-Incubator</h3>
            <h3>Forgot your password?</h3>
        </div>
        <div>
            <input placeholder={"Email"} value={currentValue} onChange={onChangeHandler}/>
            <p>Enter your email address and we will send you further instructions</p>
        </div>
        <div>
            <button onClick={onClickHandler}>Send Instructions</button>
        </div>
        <p>Did you remember your password?</p>
        {/*<NavLink to={PATH.FORGOT_PASSWORD}>*/}
            <p>Try logging in</p>
        {/*</NavLink>*/}

    </>
}
export default ForgotPassword
