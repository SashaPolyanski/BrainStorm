import React, { ChangeEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setNewPasswordTC } from '../../../../bll/passwordReducer';
import { AppRootStateType } from '../../../../bll/store';
import Button from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

export type FormData = {
  password: string;
};

const PasswordRecovery = () => {
  const dispatch = useDispatch<any>();
  const pass = useSelector((state: AppRootStateType) => state.register.isNewPassword);
  // console.log(pass);
  const { token } = useParams<{ token: string }>();

  const { register, handleSubmit, formState, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = password => {
    dispatch(setNewPasswordTC({ password: password.password, token }));
    reset();
  };

  return (
    <AuthWrapper>
      <div>
        <h3>It-Incubator</h3>
        <h3>Create new password</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="password" register={register} label="email" name="password" />
          <p>Create new password and we will send you further instructions to email</p>
        </div>
        <div>
          <Button variant="auth" name=" Create new password" type="submit" />
        </div>
      </form>
    </AuthWrapper>
  );
};
export default PasswordRecovery;
