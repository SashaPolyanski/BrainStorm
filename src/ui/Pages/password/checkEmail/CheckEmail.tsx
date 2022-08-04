import React from 'react';

import emailLogo from '../../../../assets/images/img.png';
import { useAppSelector } from '../../../../bll/store';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

const CheckEmail = () => {
  const email = useAppSelector<string>(state => state.register.email);
  return (
    <AuthWrapper>
      <h3>It-Incubator</h3>
      <img src={emailLogo} alt="" />
      <h3>Check Email</h3>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        We've sent an Email with instructions to
        <span> {email}</span>
      </p>
    </AuthWrapper>
  );
};

export default CheckEmail;
