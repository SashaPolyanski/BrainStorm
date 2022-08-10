import React, { ReactNode } from 'react';

import s from './ContentWrapper.module.scss';
import Header from './header/Header';

type PropsType = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: PropsType) => (
  <div>
    <Header />
    <div className={s.wrapper}>
      <div className={s.wrapper__container}>{children}</div>
    </div>
  </div>
);
