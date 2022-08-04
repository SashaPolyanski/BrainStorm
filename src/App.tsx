import React from 'react';

import { Route, Routes } from 'react-router-dom';

import CheckEmail from './features/auth/Password/CheckEmail/CheckEmail';
import ForgotPassword from './features/auth/Password/ForgotPassword/ForgotPassword';
import PasswordRecovery from './features/auth/Password/PasswordRecovery/PasswordRecovery';
import NavigationBar from './ui/components/navigation/NavigationBar';
import Login1 from './ui/Pages/login/Login';
import Profile from './ui/Pages/profile/Profile';
import { Registration } from './ui/Pages/registration/Registration';

const App = () => (
  <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Login1 />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/set-new-password" element={<PasswordRecovery />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Routes>
  </>
);

export default App;
