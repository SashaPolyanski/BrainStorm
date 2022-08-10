import React, { useState } from 'react';

import { addPack } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import Button from '../../components/button/Button';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './PackPage.module.scss';
import { Packs } from './Packs';

export const PackPage = () => {
  const dispatch = useAppDispatch();
  const [isPrivate, setIsPrivate] = useState(false);

  const addPackHandler = () => {
    const packName = prompt('Enter new pack name', ''); // eslint-disable-line no-alert
    if (packName) {
      dispatch(addPack({ name: packName, isPrivate }));
    }
  };

  return (
    <ContentWrapper>
      <div className={s.packPage}>
        <h2>Packs list</h2>
        <Button variant="auth" name="AddPack" onClick={addPackHandler} />
      </div>
      <Packs />
    </ContentWrapper>
  );
};
