import React from 'react';

import { useSelector } from 'react-redux';

// eslint-disable-next-line import/no-unresolved
import emailLogo from '../../../../assets/img.png';
import { RootStateType } from '../../../../main/bll/store';
import { AuthWrapper } from '../../../../ui/styles/authWrapper/AuthWrapper';

const CheckEmail = () => (
  // const email = useSelector<RootStateType, string | null>(state => state.password.email)

  <AuthWrapper>
    <h3>It-Incubator</h3>
    <img src={emailLogo} alt="" />
    <h3>Check Email</h3>
    <p>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      We've sent an Email with instructions to
      {/* <span>{email}</span> */}
    </p>
  </AuthWrapper>
);

export default CheckEmail;
