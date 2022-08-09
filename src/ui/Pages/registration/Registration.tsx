import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { setRegistration } from '../../../bll/slices/registrationReducer';
import { useAppDispatch } from '../../../bll/store';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { Title } from '../../components/title/Title';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import s from './Registration.module.scss';

type FormDataType = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Registration = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('email address is required')
      .email('Please enter valid email'),
    password: Yup.string()
      .required('password is required')
      .min(3, 'password must be at 3 char long'),
    confirmPassword: Yup.string()
      .required('password is required')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({ mode: 'all', resolver: yupResolver(formSchema) });

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
      <Title title="Sign Up" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlock}>
          <div className={s.input}>
            <Input
              name="email"
              register={register}
              type="text"
              label="Email*"
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
              label="Password*"
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
              label="Confirm Password*"
              required
              error={errors.confirmPassword?.message}
            />
            <div className={s.error}>
              {errors.confirmPassword && errors.confirmPassword.message}
            </div>
          </div>
        </div>
        <div className={s.buttonBlock}>
          <Button
            type="button"
            variant="cancel_auth"
            name="cancel"
            onClick={() => {
              navigate(-1);
            }}
          />
          <Button type="submit" variant="auth" name="register" />
        </div>
      </form>
    </AuthWrapper>
  );
};
