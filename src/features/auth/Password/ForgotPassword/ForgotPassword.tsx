import React, { ChangeEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { sendEmailTC } from '../../../../bll/passwordReducer';
import { useAppSelector } from '../../../../bll/store';
import { PATH } from '../../../../main/ui/Routes/Routes';
import Button from '../../../../ui/components/button/Button';
import { Input } from '../../../../ui/components/input/Input';
import { AuthWrapper } from '../../../../ui/styles/authWrapper/AuthWrapper';

type FormDataType = {
  email: string;
};

const ForgotPassword = () => {
  const dispatch = useDispatch<any>();
  const { register, handleSubmit, formState, reset } = useForm<FormDataType>();
  const isSend = useAppSelector<boolean>(state => state.register.isSend);
  const onSubmit: SubmitHandler<FormDataType> = email => {
    dispatch(sendEmailTC(email));
    // console.log(data);
    reset();
  };

  if (isSend) {
    return <Navigate to={PATH.CHECK_EMAIL} />;
  }
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
          <Button type="submit" name="SendMail" variant="auth" />
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
