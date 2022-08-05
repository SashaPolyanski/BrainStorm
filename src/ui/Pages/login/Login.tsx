import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { setIsLoginTC } from '../../../bll/authReducer';
import { AppRootStateType } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { Title } from '../../components/title/Title';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import s from './Login.module.scss';

export interface IFormInputs {
  email: string;
  password: number;
}

const Login = () => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth.isLogin);
  const dispatch = useDispatch<any>();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({
    mode: 'onChange',
  });
  const onSubmit = (data: IFormInputs) => {
    dispatch(setIsLoginTC(data));
    reset();
  };

  if (isAuth) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <AuthWrapper>
      <div>
        <Title title="Sign in" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <Input type="text" label="Email" register={register} name="email" required />
            <div className={s.error}>{errors.email && errors.email.message}</div>
          </div>
          <div className={s.input}>
            <Input
              type="password"
              label="Password"
              register={register}
              name="password"
              required
            />
            <div className={s.error}>{errors.email && errors.email.message}</div>
          </div>
          <NavLink to={PATH.SEND_EMAIL} className={s.forgot}>
            Forgot Password
          </NavLink>
          <Button type="submit" name="Login" variant="auth" />
        </form>
        <div className={s.textContainer}>
          <p className={s.text}>Do not have an account?</p>
          <NavLink className={s.signUp} to={PATH.REGISTRATION}>
            Sign up
          </NavLink>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
