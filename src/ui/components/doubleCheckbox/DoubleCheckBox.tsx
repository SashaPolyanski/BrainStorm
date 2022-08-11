import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectUserId } from '../../../bll/selectors/selectors';
import { showCertainPacks } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import Button from '../button/Button';

import s from './DoubleCheckBox.module.scss';

export const DoubleCheckBox = () => {
  const dispatch = useAppDispatch();
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const [selectedMyPacks, setSelectedMyPacks] = useState(false);

  const showMyPacks = () => {
    dispatch(showCertainPacks({ id: userId }));
    setSelectedMyPacks(true);
  };
  const showAllPacks = () => {
    dispatch(showCertainPacks({ id: '' }));
    setSelectedMyPacks(false);
  };

  return (
    <div className={s.checkBoxComponent}>
      <h3 className={s.title}>Show packs cards</h3>
      <div className={s.checkBox}>
        <Button
          name="My"
          variant={selectedMyPacks ? 'show_certain_packs_active' : 'show_certain_packs'}
          onClick={showMyPacks}
        />
        <Button
          name="All"
          variant={!selectedMyPacks ? 'show_certain_packs_active' : 'show_certain_packs'}
          onClick={showAllPacks}
        />
      </div>
    </div>
  );
};
