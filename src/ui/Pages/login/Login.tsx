import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { setIsLoginTC } from '../../../bll/loginReducer';
import { AppRootStateType } from '../../../bll/store';
import { auth } from '../../../dal/auth';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';
import s from '../../styles/login.module.scss';

export interface IFormInputs {
  email: string;
  password: number;
  rememberMe: boolean;
}

const Login = () => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth);
  const dispatch = useDispatch<any>();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({
    mode: 'onChange',
  });
  const onSubmit = (data: IFormInputs) => {
    dispatch(setIsLoginTC(data));
    reset();
  };

  // if (isAuth) {
  //   return <Navigate to="Profile" />;
  // }

  return (
    <AuthWrapper>
      <div className={s.login__wrapper}>
        <h3>It-incubator</h3>
        <h5>Sign in</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" label="email" register={register} name="email" required />
          <div style={{ height: '50px', color: 'red' }}>
            {errors?.email && <p>{errors?.email.message || 'Error!'}</p>}
          </div>
          <Input
            type="password"
            label="password"
            register={register}
            name="password"
            required
          />
          <div style={{ height: '50px', color: 'red' }}>
            {errors?.password && <p>{errors?.password.message || 'Error!'} </p>}
          </div>
          <Input
            type="checkbox"
            label="Remember me"
            register={register}
            name="rememberMe"
          />
          <Button type="submit" name="Login" variant="auth" />
        </form>
        <p>Do not have an account?</p>
        <NavLink to="registration">Sign up</NavLink>
      </div>
    </AuthWrapper>
  );
};

export default Login;
