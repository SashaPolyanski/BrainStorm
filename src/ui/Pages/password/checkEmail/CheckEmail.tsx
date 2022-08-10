import React from 'react';

import { useSelector } from 'react-redux';

import emailLogo from '../../../../assets/images/img.png';
import { selectEmail } from '../../../../bll/selectors/selectors';
import { Title } from '../../../components/title/Title';
import { AuthWrapper } from '../../../styles/authWrapper/AuthWrapper';

import s from './CheckEmail.module.scss';

const CheckEmail = () => {
  const email = useSelector(selectEmail);
  return (
    <AuthWrapper>
      <div>
        <Title title="BrainStorm" />
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
