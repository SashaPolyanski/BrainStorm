import React from 'react';

import { Route, Routes } from 'react-router-dom';

import CheckEmail from './features/auth/Password/CheckEmail/CheckEmail';
import ForgotPassword from './features/auth/Password/ForgotPassword/ForgotPassword';
import PasswordRecovery from './features/auth/Password/PasswordRecovery/PasswordRecovery';
import RoutesComponent from './main/ui/Routes/Routes';
import Login from './ui/Pages/Login';
import Registr from './ui/Pages/Reg';

const App = () => <RoutesComponent />;

export default App;
