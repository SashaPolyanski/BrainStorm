import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './navigationBar.module.scss';

const NavigationBar = () => (
  <nav className={s.nav}>
    <ul>
      <li>
        <NavLink to="login">Login</NavLink>
      </li>
      <li>
        <NavLink to="registration">Registration</NavLink>
      </li>
      <li>
        <NavLink to="profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="logout">Logout</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
