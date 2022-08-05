import React, { ChangeEvent } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';

import { setNewPasswordTC } from '../../../../bll/passwordReducer';
import { AppRootStateType, useAppSelector } from '../../../../bll/store';
import { PATH } from '../../../../main/ui/Routes/Routes';
import Button from '../../../../ui/components/button/Button';
import { Input } from '../../../../ui/components/input/Input';
import { AuthWrapper } from '../../../../ui/styles/authWrapper/AuthWrapper';

export type FormData = {
  password: string;
};

const PasswordRecovery = () => {
  const dispatch = useDispatch<any>();
  const pass = useAppSelector<boolean>(state => state.register.isNewPassword);
  // console.log(pass);
  const { token } = useParams<{ token: string }>();

  const { register, handleSubmit, formState, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = password => {
    dispatch(setNewPasswordTC({ password: password.password, token }));
    reset();
  };

  if (pass) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <AuthWrapper>
      <div>
        <h3>It-Incubator</h3>
        <h3>Create new password</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input type="password" register={register} label="password" name="password" />
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
