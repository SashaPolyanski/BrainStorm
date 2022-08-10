import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectUser } from '../../../bll/selectors/selectors';
import { addPack, setSearchValue } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import Button from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import Sidebar from '../../components/sidebar/Sidebar';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './PackPage.module.scss';
import { Packs } from './Packs';

export const PackPage = () => {
  const userName = useSelector(selectUser);
  const dispatch = useAppDispatch();
  const [isPrivate, setIsPrivate] = useState(false);

  const addPackHandler = () => {
    const packName = prompt('Enter new pack name', ''); // eslint-disable-line no-alert
    if (packName) {
      dispatch(addPack({ name: packName, isPrivate }));
    }
  };
  const debouncedInput = useDebounce((text: string) => {
    dispatch(setSearchValue({ packName: text }));
  }, 500);
  const onInputHandler = (e: any) => {
    const text = e && e.currentTarget.value;
    debouncedInput(text);
  };
  return (
    <ContentWrapper>
      <h2 className={s.title}>Packs list {userName.name}</h2>

      <span />
      <div className={s.packPage}>
        <Input variant="search" type="text" onInput={onInputHandler} />
        <Button variant="auth" name="AddPack" onClick={addPackHandler} />
      </div>
      <Packs />
    </ContentWrapper>
  );
};
