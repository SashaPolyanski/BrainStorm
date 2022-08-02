import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Registration } from './ui/Pages/registration/Registration';

const App = () => (
  <Routes>
    <Route path="/" element={<Registration />} />
  </Routes>
);

export default App;
