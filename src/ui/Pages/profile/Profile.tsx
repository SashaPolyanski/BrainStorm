import React from 'react';

import Button from '../../components/button/Button';
import { AuthWrapper } from '../../styles/authWrapper/AuthWrapper';

import EditAvatarProfile from './editProfile/editAvatarProfile/EditAvatarProfile';
import EditNameProfile from './editProfile/editNameProfile/EditNameProfile';
import s from './Profile.module.scss';

const Profile = () => (
  <AuthWrapper>
    <div className={s.container}>
      <EditAvatarProfile />
      <EditNameProfile />
      <div className={s.buttonWrapper}>
        <Button variant="auth" name="Logout" />
      </div>
    </div>
  </AuthWrapper>
);

export default Profile;
