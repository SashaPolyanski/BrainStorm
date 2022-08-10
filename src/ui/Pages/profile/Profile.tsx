import React, { ChangeEvent, useRef, useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import iconPhoto from '../../../assets/images/iconDownloadfoto.png';
import { selectIsAuth, selectUser } from '../../../bll/selectors/selectors';
import { updateUserInfo } from '../../../bll/slices/userSlice';
import { useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import s from './Profile.module.scss';

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const inRef = useRef<HTMLInputElement>(null);
  const isAuth = useSelector(selectIsAuth);
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<FormDataType>({
    defaultValues: {
      name: user.name,
    },
  });
  const onSubmit: SubmitHandler<FormDataType> = data => {
    setEdit(!edit);
    dispatch(updateUserInfo(data));
  };
  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          dispatch(updateUserInfo({ avatar: file64 }));
        });
      } else {
        // dispatch(setAppErrorAC('Файл слишком большого размера'));
      }
    }
  };
  const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const file64 = reader.result as string;
      callBack(file64);
    };
    reader.readAsDataURL(file);
  };
  const uploadHandler2 = () => {
    inRef && inRef.current && inRef.current.click();
  };
  const editNameHandler = () => {
    setEdit(!edit);
  };
  const registrationDate = user.created.slice(0, 10).split('-').reverse().join('-');
  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }

  return (
    <AuthWrapper>
      <div className={s.container}>
        <div className={s.userAvatar}>
          <img className={s.userAvatarImg} src={user.avatar} alt="" />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <img
            onClick={uploadHandler2}
            className={s.iconDownloadPhoto}
            src={iconPhoto}
            alt=""
          />
          <input
            ref={inRef}
            type="file"
            style={{ display: 'none' }}
            onChange={uploadHandler}
          />
        </div>
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
        <div className={s.buttonWrapper}>
          <Button variant="auth" name="Logout" />
        </div>
      </div>
    </AuthWrapper>
  );
};

type FormDataType = {
  name: string;
};
export default Profile;
