import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import * as Yup from 'yup';

import { selectIsSend, selectLoadingApp } from '../../../../bll/selectors/selectors';
import { sendEmailTC } from '../../../../bll/slices/passwordSlice';
import { useAppDispatch } from '../../../../bll/store';
import { PATH } from '../../../../common/constants/constants';
import Button from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import Preloader from '../../../components/preloader/Preloader';
import { Title } from '../../../components/title/Title';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './ForgotPassword.module.scss';

type FormDataType = {
  email: string;
};

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const isSend = useSelector(selectIsSend);
  const loading = useSelector(selectLoadingApp);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email address is required')
      .email('Please enter valid email'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataType>({ mode: 'all', resolver: yupResolver(formSchema) });

  const onSubmit: SubmitHandler<FormDataType> = email => {
    dispatch(sendEmailTC(email));
    reset();
  };

  if (isSend) {
    return <Navigate to={PATH.CHECK_EMAIL} />;
  }

  if (loading) {
    return <Preloader />;
  }

  return (
    <AuthWrapper>
      <div>
        <Title title="Forgot your password?" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className={s.textContainer}>
          <p>Enter your email address and we will send you further instructions</p>
        </div>
        <Button type="submit" name="Send Instructions" variant="auth" />
      </form>
      <div className={s.infoContainer}>
        <p>Did you remember your password?</p>
        <NavLink to={PATH.LOGIN}>
          <p>Try logging in</p>
        </NavLink>
      </div>
    </AuthWrapper>
  );
};
export default ForgotPassword;
