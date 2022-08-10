import React, { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth, selectUser } from '../../../../../bll/selectors/selectors';
import { updateUserInfo } from '../../../../../bll/slices/userSlice';
import { useAppDispatch } from '../../../../../bll/store';
import { PATH } from '../../../../../common/constants/constants';
import { Input } from '../../../../components/input/Input';
import s from '../../Profile.module.scss';

const EditNameProfile = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm<FormDataType>({
    defaultValues: {
      name: user.name,
    },
  });
  const onSubmit: SubmitHandler<FormDataType> = data => {
    setEdit(!edit);
    dispatch(updateUserInfo(data));
  };
  const editNameHandler = () => {
    setEdit(!edit);
  };
  const registrationDate = user.created.slice(0, 10).split('-').reverse().join('-');
  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <div className={s.descriptionUser}>
      <div className={s.cardsCount}>
        Cards Packs: {user.publicCardPacksCount} quantity
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.userName}>
          Name:
          {edit ? (
            <Input register={register} type="text" name="name" />
          ) : (
            <span>{user.name}</span>
          )}
          {!edit ? (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <span onClick={editNameHandler} className={s.edit}>
              edit
            </span>
          ) : (
            <button type="submit" className={s.edit}>
              save
            </button>
          )}
        </div>
      </form>
      <div className={s.userEmail}>Email: {user.email}</div>
      <div>Registration: {registrationDate}</div>
    </div>
  );
};
type FormDataType = {
  name: string;
};
export default EditNameProfile;
