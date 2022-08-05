import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';

import { selectIsSend } from '../../../../bll/selectors/selectors';
import { sendEmailTC } from '../../../../bll/slices/passwordReducer';
import { useAppDispatch } from '../../../../bll/store';
import { PATH } from '../../../../common/constants/constants';
import Button from '../../../components/button/Button';
import { Input } from '../../../components/input/Input';
import { Title } from '../../../components/title/Title';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './ForgotPassword.module.scss';

type FormDataType = {
  email: string;
};

const ForgotPassword = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm<FormDataType>();
  const isSend = useSelector(selectIsSend);
  const onSubmit: SubmitHandler<FormDataType> = email => {
    dispatch(sendEmailTC(email));
    // console.log(data);
    reset();
  };

  if (isSend) {
    return <Navigate to={PATH.CHECK_EMAIL} />;
  }
  return (
    <AuthWrapper>
      <div>
        <Title title="Forgot your password?" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.input}>
          <Input type="text" register={register} name="email" label="Email" />
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
