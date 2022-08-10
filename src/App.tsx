import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { PATH } from './common/constants/constants';
import Login from './ui/Pages/login/Login';
import { PackPage } from './ui/Pages/packs/PackPage';
import CheckEmail from './ui/Pages/password/checkEmail/CheckEmail';
import ForgotPassword from './ui/Pages/password/forgotPassword/ForgotPassword';
import PasswordRecovery from './ui/Pages/password/passwordRecovery/PasswordRecovery';
import Profile from './ui/Pages/profile/Profile';
import { Registration } from './ui/Pages/registration/Registration';

const App = () => (
  <>
    {/* <NavigationBar /> */}
    <Routes>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTRATION} element={<Registration />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
      <Route path={PATH.NEW_PASSWORD} element={<PasswordRecovery />} />
      <Route path={PATH.SEND_EMAIL} element={<ForgotPassword />} />
      <Route path={PATH.PACKS} element={<PackPage />} />
    </Routes>
  </>
);

export default App;
