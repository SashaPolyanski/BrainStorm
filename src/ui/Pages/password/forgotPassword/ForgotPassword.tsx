import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { sendEmailTC } from '../../../../bll/passwordReducer';
import { useAppSelector } from '../../../../bll/store';
import { PATH } from '../../../../common/constants/constants';
import Button from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './ForgotPassword.module.scss';

type FormDataType = {
  email: string;
};

const ForgotPassword = () => {
  const dispatch = useDispatch<any>();
  const { register, handleSubmit, reset } = useForm<FormDataType>();
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
        <h2 className={s.title}>It-Incubator</h2>
        <h2 className={s.subTitle}>Forgot your password?</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.input}>
          <Input type="text" register={register} name="email" label="Email" />
        </div>
        <div className={s.textContainer}>
          <p>Enter your email address and we will send you further instructions</p>
        </div>
        <Button type="submit" name="Send Instructions" variant="auth" />
      </form>
      <div className={s.infoContainer}>
        <p>Did you remember your password?</p>
        <NavLink to={PATH.CHECK_EMAIL}>
          <p>Try logging in</p>
        </NavLink>
      </div>
    </AuthWrapper>
  );
};
export default ForgotPassword;
