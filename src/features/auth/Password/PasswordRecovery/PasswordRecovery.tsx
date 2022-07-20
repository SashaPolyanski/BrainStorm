import React, { ChangeEvent } from 'react';

import { useParams } from 'react-router-dom';

import { setNewPasswordTC } from '../../../../main/bll/passwordReducer';
import Button from '../../../../ui/components/button/Button';
import { Input } from '../../../../ui/components/input/Input';
import { AuthWrapper } from '../../../../ui/styles/authWrapper/AuthWrapper';

const PasswordRecovery = () => {
  // const dispatch = useDispatch()
  const { token } = useParams<{ token: string }>();

  const [newPassword, setNewPassword] = React.useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.currentTarget.value);
  };
  const onClickHandler = () => {
    setNewPasswordTC(newPassword, token);
  };

  return (
    <AuthWrapper>
      <div>
        <h3>It-Incubator</h3>
        <h3>Create new password</h3>
      </div>
      <div>
        <Input placeholder="Password" onChange={onChangeHandler} value={newPassword} />

        <p>Create new password and we will send you further instructions to email</p>
      </div>
      <div>
        <Button variant="auth" type="submit" onClick={onClickHandler}>
          Create new password
        </Button>
      </div>
    </AuthWrapper>
  );
};
export default PasswordRecovery;
