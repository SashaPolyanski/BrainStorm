import React from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../../bll/selectors/selectors';
import { logout } from '../../../bll/slices/authReducer';
import { useAppDispatch } from '../../../bll/store';
import { PATH } from '../../../common/constants/constants';

const Profile = () => {
  const isAuth = useSelector(selectIsAuth);
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
