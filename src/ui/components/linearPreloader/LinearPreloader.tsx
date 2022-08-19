import React from 'react';

import s from './LinearPreloader.module.scss';

const LinearPreloader = () => (
  <div className={s.linearActivity}>
    <div className={s.indeterminate} />
  </div>
);

export default LinearPreloader;
