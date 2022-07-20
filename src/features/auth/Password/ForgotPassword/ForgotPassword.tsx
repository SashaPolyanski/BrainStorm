import React, { ChangeEvent } from 'react';

import { NavLink } from 'react-router-dom';

import { sendEmailTC } from '../../../../main/bll/passwordReducer';
import { PATH } from '../../../../main/ui/Routes/Routes';
import Button from '../../../../ui/components/button/Button';
import { Input } from '../../../../ui/components/input/Input';
import { AuthWrapper } from '../../../../ui/styles/authWrapper/AuthWrapper';

const ForgotPassword = () => {
  const [currentValue, setCurrentValue] = React.useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    sendEmailTC(currentValue);
  };

  return (
    <AuthWrapper>
      <div>
        <h3>It-Incubator</h3>
        <h3>Forgot your password?</h3>
      </div>
      <div>
        <Input
          type="password"
          placeholder="Email"
          value={currentValue}
          onChange={onChangeHandler}
        />
        <p>Enter your email address and we will send you further instructions</p>
      </div>
      <div>
        <Button type="submit" name="Send" onClick={onClickHandler} variant="auth" />
      </div>
      <p>Did you remember your password?</p>
      <NavLink to={PATH.CHECK_EMAIL}>
        <p>Try logging in</p>
      </NavLink>
    </AuthWrapper>
  );
};
export default ForgotPassword;
