import React from 'react';

import { Route, Routes } from 'react-router-dom';

import NavigationBar from './ui/components/navigation/NavigationBar';
import Login from './ui/Pages/login/Login';
import Profile from './ui/Pages/profile/Profile';
import { Registration } from './ui/Pages/registration/Registration';

const App = () => (
  <>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
