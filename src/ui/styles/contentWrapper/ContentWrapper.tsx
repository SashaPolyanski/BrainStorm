import React, { ReactNode } from 'react';

import Sidebar from '../../components/sidebar/Sidebar';

import s from './ContentWrapper.module.scss';
import Header from './header/Header';

type PropsType = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: PropsType) => (
  <div>
    <Header />

    <div className={s.wrapper}>
      <Sidebar />
      <div className={s.wrapper__container}>{children}</div>
    </div>
  </div>
);
