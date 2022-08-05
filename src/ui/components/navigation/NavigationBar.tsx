import React from 'react';

import { NavLink } from 'react-router-dom';

import { PATH } from '../../../common/constants/constants';

import s from './navigationBar.module.scss';

const NavigationBar = () => (
  <nav className={s.nav}>
    <ul>
      <li>
        <NavLink to={PATH.LOGIN}>Login</NavLink>
      </li>
      <li>
        <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
      </li>
      <li>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
