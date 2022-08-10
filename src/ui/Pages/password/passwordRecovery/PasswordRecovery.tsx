import React, { ChangeEvent } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { selectIsAuth, selectLoading } from '../../../../bll/selectors/selectors';
import { setNewPasswordTC } from '../../../../bll/slices/passwordReducer';
import { useAppDispatch } from '../../../../bll/store';
import { PATH } from '../../../../common/constants/constants';
import Button from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import Preloader from '../../../components/preloader/Preloader';
import { Title } from '../../../components/title/Title';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './PasswordRecovery.module.scss';

export type FormData = {
  password: string;
};

const PasswordRecovery = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams<{ token: string }>();
  const loading = useSelector(selectLoading);
  const isLogin = useSelector(selectIsAuth);

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required('password is required')
      .min(3, 'password must be at 3 char long'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FormData> = password => {
    dispatch(setNewPasswordTC({ password: password.password, token }));
    reset();
  };

  if (!isLogin) {
    return <Navigate to={PATH.LOGIN} />;
  }

  if (loading) {
    return <Preloader />;
  }

  return (
    <AuthWrapper>
      <Title title="Create new password" />
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <p className={s.description}>
          Create new password and we will send you further instructions to email
        </p>

        <div className={s.buttonContainer}>
          <Button variant="auth" name=" Create new password" type="submit" />
        </div>
      </form>
    </AuthWrapper>
  );
};
export default PasswordRecovery;
