import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { logout } from '../../../bll/authReducer';
import { AppRootStateType, useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';

const Profile = () => {
  const isAuth = useSelector((state: AppRootStateType) => state.auth.isLogin);
  const dispatch = useAppDispatch();
  if (!isAuth) {
    return <Navigate to={PATH.LOGIN} />;
  }
  return (
    <div>
      Profile
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Profile;
