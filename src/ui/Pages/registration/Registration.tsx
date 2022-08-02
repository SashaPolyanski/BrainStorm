import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { setRegistration } from '../../../bll/registrationReducer';
import { useAppDispatch } from '../../../bll/store';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import s from './Registration.module.scss';

type FormDataType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = () => {
  const dispatch = useAppDispatch();

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email address is required')
      .email('Please enter valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(3, 'Password must be at 3 char long'),
    confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });

  // const formOptions = { resolver: yupResolver(formSchema) }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({ mode: 'onBlur', resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<FormDataType> = data => {
    console.log(data);
    dispatch(setRegistration({ email: data.email, password: data.password }));
    reset();
  };
  // if (isRegistered) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <AuthWrapper>
      <h2 className={s.title}>it-incubator</h2>
      <h2 className={s.subTitle}>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlock}>
          <div className={s.input}>
            <Input
              name="email"
              register={register}
              type="text"
              label="Email"
              required
              error={errors.email?.message}
            />
            <div className={s.error}>{errors.email && errors.email.message}</div>
          </div>
          <div className={s.input}>
            <Input
              name="password"
              register={register}
              type="password"
              label="Password"
              required
              error={errors.password?.message}
            />
            <div className={s.error}>{errors.password && errors.password.message}</div>
          </div>
          <div className={s.input}>
            <Input
              name="confirmPassword"
              register={register}
              type="password"
              label="Confirm Password"
              required
              error={errors.confirmPassword?.message}
            />
            <div className={s.error}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </div>
          </div>
        </div>
        <div className={s.buttonBlock}>
          <Button type="button" variant="cancel_auth" name="cancel" />
          <Button type="submit" variant="auth" name="register" />
        </div>
      </form>
    </AuthWrapper>
  );
};
