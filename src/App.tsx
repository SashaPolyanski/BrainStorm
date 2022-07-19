import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Login from './ui/Pages/Login';
import Registr from './ui/Pages/Reg';

const App = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Registr />} />
  </Routes>
);

export default App;
