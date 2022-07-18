import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Login from './ui/Pages/Login';
import { Registration } from './ui/Pages/registration/Registration';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Registration />} />
  </Routes>
);

export default App;
