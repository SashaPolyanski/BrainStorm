import React, { ReactNode } from 'react';

import s from './ContentWrapper.module.scss';

type PropsType = {
  children: ReactNode;
};

export const ContentWrapper = ({ children }: PropsType) => (
  <div className={s.wrapper}>
    <div className={s.wrapper__container}>{children}</div>
  </div>
);
