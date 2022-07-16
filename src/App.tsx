import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Login1 from './ui/Pages/Login1';
import Registr from './ui/Pages/Reg';

const App = () => (
  <Routes>
    <Route path="/" element={<Login1 />} />
    <Route path="/login" element={<Registr />} />
  </Routes>
);

export default App;
