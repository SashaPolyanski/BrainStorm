import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../../bll/selectors/selectors';
import { logout } from '../../../bll/slices/authSlice';
import { useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';
import Button from '../../components/button/Button';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import EditAvatarProfile from './editProfile/editAvatarProfile/EditAvatarProfile';
import EditNameProfile from './editProfile/editNameProfile/EditNameProfile';
import s from './Profile.module.scss';

const Profile = () => {
  const login = useSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  if (!login) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <AuthWrapper>
      <div className={s.container}>
        <EditAvatarProfile />
        <EditNameProfile />
        <div className={s.buttonWrapper}>
          <Button onClick={logoutHandler} variant="auth" name="Logout" />
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Profile;
