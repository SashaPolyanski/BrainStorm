import React, { ChangeEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { setNewPasswordTC } from '../../../../bll/passwordReducer';
import { useAppDispatch } from '../../../../bll/store';
import Button from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { Title } from '../../../components/title/Title';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './PasswordRecovery.module.scss';

export type FormData = {
  password: string;
};

const PasswordRecovery = () => {
  const dispatch = useAppDispatch();
  const { token } = useParams<{ token: string }>();

  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = password => {
    dispatch(setNewPasswordTC({ password: password.password, token }));
    reset();
  };

  return (
    <AuthWrapper>
      <Title title="Create new password" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.input}>
          <Input
            type="password"
            register={register}
            label="New Password"
            name="password"
          />
          <p className={s.description}>
            Create new password and we will send you further instructions to email
          </p>
        </div>
        <div className={s.buttonContainer}>
          <Button variant="auth" name=" Create new password" type="submit" />
        </div>
      </form>
    </AuthWrapper>
  );
};
export default PasswordRecovery;
