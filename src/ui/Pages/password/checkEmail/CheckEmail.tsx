import React from 'react';

import emailLogo from '../../../../assets/images/img.png';
import { useAppSelector } from '../../../../bll/store';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './CheckEmail.module.scss';

const CheckEmail = () => {
  const email = useAppSelector<string>(state => state.register.email);
  return (
    <AuthWrapper>
      <div>
        <h2 className={s.title}>BrainStorm</h2>
        <img className={s.imageLogo} src={emailLogo} alt="emailLogo" />
        <h2 className={s.title}>Check Email</h2>
      </div>
      <div className={s.infoContainer}>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We've sent an Email with instructions to
          <span> {email}</span>
        </p>
      </div>
    </AuthWrapper>
  );
};

export default CheckEmail;
