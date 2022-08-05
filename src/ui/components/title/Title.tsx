import React from 'react';

import s from './Title.module.scss';

export const Title = ({ title }: TitleType) => (
  <div>
    <h2 className={s.title}>BrainStorm</h2>
    <h2 className={s.subTitle}>{title}</h2>
  </div>
);
type TitleType = {
  title: string;
};
