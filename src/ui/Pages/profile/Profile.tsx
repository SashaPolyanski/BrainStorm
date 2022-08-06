import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import {
  selectIsAuth,
  selectUserAvatar,
  selectUserEmail,
  selectUserName,
} from '../../../bll/selectors/selectors';
import { useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';
import Button from '../../components/button/Button';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import s from './Profile.module.scss';

const Profile = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userAvatar = useSelector(selectUserAvatar);
  const dispatch = useAppDispatch();
  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }
  console.log(`email${userEmail}`);
  return (
    <AuthWrapper>
      <div className={s.userAvatar}>
        <img src={userAvatar} alt="" />
      </div>
      <div className={s.userName}>{userName}</div>
      <div className={s.userEmail}>{userEmail}</div>
      <Button variant="auth" name="logout" />
    </AuthWrapper>
  );
};

export default Profile;
