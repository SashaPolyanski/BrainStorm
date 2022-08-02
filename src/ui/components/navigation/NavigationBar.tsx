import React from 'react';

import s from './navigationBar.module.scss';

const NavigationBar = () => (
  <nav className={s.nav}>
    <ul>
      <li>Login</li>
      <li>Registration</li>
      <li>Profile</li>
      <li>Exit</li>
    </ul>
  </nav>
);

export default NavigationBar;
