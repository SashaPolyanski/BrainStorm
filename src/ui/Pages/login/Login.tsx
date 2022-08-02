import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { setIsLoginTC } from '../../../bll/loginReducer';
import { AppRootStateType } from '../../../bll/store';
import { auth } from '../../../dal/auth';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

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
    console.log(JSON.stringify(data));

    dispatch(setIsLoginTC(data));
    reset();
  };

  if (isAuth) {
    return <Navigate to="Profile" />;
  }

  return (
    <div>
      <AuthWrapper>
        <div>IT-INCUBATOR</div>
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
          <Button type="submit" name="Отправить" variant="auth" />
        </form>
      </AuthWrapper>
    </div>
  );
};

export default Login;
