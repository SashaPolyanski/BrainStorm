import React from 'react';

import { useSelector } from 'react-redux';

import {
  selectMaxValue,
  selectMinValue,
  selectUser,
} from '../../../bll/selectors/selectors';
import { DoubleCheckBox } from '../doubleCheckbox/DoubleCheckBox';
import DoubleRangeInput from '../doubleRangeInput/DoubleRangeInput';

import s from './Sidebar.module.scss';

const Sidebar = () => {
  const minValue = useSelector(selectMinValue);
  const maxValue = useSelector(selectMaxValue);
  const userInfo = useSelector(selectUser);
  return (
    <div className={s.container}>
      <div>
        <div className={s.contentWrapper}>
          <img className={s.userAvatar} src={userInfo.avatar} alt="" />
          <div className={s.userName}>{userInfo.name}</div>
          <div className={s.userJob}>Frontend Developer</div>
        </div>
        <DoubleCheckBox />
        <div className={s.containerDoubleRange}>
          <div className={s.title}>Number of cards</div>
          <div>
            <DoubleRangeInput min={minValue} max={maxValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
