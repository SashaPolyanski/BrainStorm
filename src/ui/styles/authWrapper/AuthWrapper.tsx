import React, { ReactNode } from 'react';

import s from './AuthWrapper.module.scss';

type PropsType = {
  children: ReactNode;
};

export const AuthWrapper = ({ children }: PropsType) => (
  <div className={s.wrapper}>
    <div className={s.wrapper__container}>{children}</div>
  </div>
);
