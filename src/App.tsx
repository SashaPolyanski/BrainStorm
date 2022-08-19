import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { selectInitialized } from './bll/selectors/selectors';
import { initializeApp } from './bll/slices/appSlice';
import { useAppDispatch } from './bll/store';
import { PATH } from './common/constants/constants';
import NavigationBar from './ui/components/navigation/NavigationBar';
import Preloader from './ui/components/preloader/Preloader';
import { CardsPage } from './ui/Pages/cards/CardsPage';
import Login from './ui/Pages/login/Login';
import { PackPage } from './ui/Pages/packs/PackPage';
import CheckEmail from './ui/Pages/password/checkEmail/CheckEmail';
import ForgotPassword from './ui/Pages/password/forgotPassword/ForgotPassword';
import PasswordRecovery from './ui/Pages/password/passwordRecovery/PasswordRecovery';
import Profile from './ui/Pages/profile/Profile';
import { Registration } from './ui/Pages/registration/Registration';

const App = () => {
  const dispatch = useAppDispatch();
  const initialized = useSelector(selectInitialized);
  console.log(initialized);

  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={PATH.NEW_PASSWORD} element={<PasswordRecovery />} />
        <Route path={PATH.SEND_EMAIL} element={<ForgotPassword />} />
        <Route path={PATH.PACKS} element={<PackPage />} />
        <Route path={PATH.CARDS} element={<CardsPage />} />
      </Routes>
    </>
  );
};

export default App;
