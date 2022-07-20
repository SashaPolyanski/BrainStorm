import React from 'react';

import { Routes, Route } from 'react-router-dom';

import CheckEmail from '../../../features/auth/Password/CheckEmail/CheckEmail';
import ForgotPassword from '../../../features/auth/Password/ForgotPassword/ForgotPassword';
import PasswordRecovery from '../../../features/auth/Password/PasswordRecovery/PasswordRecovery';
import Login from '../../../ui/Pages/Login';
import Registr from '../../../ui/Pages/Reg';

export const PATH = {
  FORGOT_PASSWORD: '/forgot',
  CHECK_EMAIL: '/check-email',
  SET_NEW_PASSWORD: '/set-new-password',
  REGISTRATION: '/register',
  LOGIN: '/login',
};

const RoutesComponent = () => (
  <Routes>
    <Route path={PATH.REGISTRATION} element={<Registr />} />
    <Route path={PATH.LOGIN} element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
    <Route path={`${PATH.SET_NEW_PASSWORD}/:token`} element={<PasswordRecovery />} />
    <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
  </Routes>
);

export default RoutesComponent;
