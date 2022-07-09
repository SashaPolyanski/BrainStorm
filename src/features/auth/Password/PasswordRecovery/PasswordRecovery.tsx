import React, {ChangeEvent} from "react";
import {setNewPasswordTC} from "../../../../main/bll/passwordReducer";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";


const PasswordRecovery = () => {

    // const dispatch = useDispatch()
    const {token} = useParams<{ token: string }>();


    const [newPassword, setNewPassword] = React.useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const onClickHandler = () => {
        setNewPasswordTC(newPassword, token)
    }

    return <>
        <div>
            <h3>It-Incubator</h3>
            <h3>Create new password</h3>
        </div>
        <div>
            <input placeholder={"Password"} onChange={onChangeHandler} value={newPassword}/>
            <p>Create new password and we will send you further instructions to email</p>
        </div>
        <div>
            <button onClick={onClickHandler}>Create new password</button>
        </div>
    </>
}
export default PasswordRecovery
