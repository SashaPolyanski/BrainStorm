import React, { ChangeEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { PATH } from '../../../../main/ui/Routes/Routes';
import Button from '../../../../ui/components/button/Button';
import { Input } from '../../../../ui/components/input/Input';
import { AuthWrapper } from '../../../../ui/styles/authWrapper/AuthWrapper';

type FormDataType = {
  email: string;
};

const ForgotPassword = () => {
  const dispatch = useDispatch<any>();
  const [currentValue, setCurrentValue] = React.useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
  };
  const onClickHandler = () => {
    sendEmailTC(currentValue);
  };

  const { register, handleSubmit, formState, reset } = useForm<FormDataType>();
  const onSubmit: SubmitHandler<FormDataType> = email => {
    dispatch(sendEmailTC(email.email));
    // console.log(data);
    reset();
  };

  return (
    <AuthWrapper>
      <div>
        <h3>It-Incubator</h3>
        <h3>Forgot your password?</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="text" register={register} label="email" name="email" />
          <p>Enter your email address and we will send you further instructions</p>
        </div>
        <div>
          <Button type="submit" name="Send" onClick={onClickHandler} variant="auth" />
        </div>
      </form>
      <p>Did you remember your password?</p>
      <NavLink to={PATH.CHECK_EMAIL}>
        <p>Try logging in</p>
      </NavLink>
    </AuthWrapper>
  );
};
export default ForgotPassword;
function sendEmailTC(currentValue: string) {
  throw new Error('Function not implemented.');
}
