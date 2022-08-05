import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import * as Yup from 'yup';

import { setIsLoginTC } from '../../../bll/authReducer';
import { AppRootStateType, useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import Preloader from '../../components/preloader/Preloader';
import { Title } from '../../components/title/Title';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import s from './Login.module.scss';

export interface IFormInputs {
  email: string;
  password: number;
}

const Login = () => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth.isLogin);
  const loading = useSelector((state: AppRootStateType) => state.app.isLoading);
  const dispatch = useAppDispatch();
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email address is required')
      .email('Please enter valid email'),
    password: Yup.string()
      .required('password is required')
      .min(3, 'password must be at 3 char long'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({
    mode: 'all',
    resolver: yupResolver(formSchema),
  });
  const onSubmit = (data: IFormInputs) => {
    dispatch(setIsLoginTC(data));
    reset();
  };

  if (isAuth) {
    return <Navigate to={PATH.PROFILE} />;
  }
  if (loading) {
    return <Preloader />;
  }
  return (
    <AuthWrapper>
      <div>
        <Title title="Sign in" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input}>
            <Input
              type="text"
              label="Email"
              register={register}
              error={errors.email?.message}
              name="email"
              required
            />
            <div className={s.error}>{errors.email && errors.email.message}</div>
          </div>
          <div className={s.input}>
            <Input
              type="password"
              label="Password"
              register={register}
              error={errors.password?.message}
              name="password"
              required
            />
            <div className={s.error}>{errors.password && errors.password.message}</div>
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
