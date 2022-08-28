import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { Magnifier } from '../../../assets/svg/Magnifier';
import {
  selectPageCount,
  selectPageSize,
  selectUser,
} from '../../../bll/selectors/selectors';
import { addPack, setPage, setSearchValue } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import { Input } from '../../components/input/Input';
import AddPackModal from '../../components/modals/modalContent/addPackModal/AddPackModal';
import Pagination from '../../components/Pagination/Pagination';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './PackPage.module.scss';
import { Packs } from './Packs';

export const PackPage = () => {
  const userName = useSelector(selectUser);
  const totalCount = useSelector(selectPageCount);
  const pageSize = useSelector(selectPageSize);

  const dispatch = useAppDispatch();
  const [isPrivate, setIsPrivate] = useState(false);

  const onChangePageHandler = (page: number) => {
    dispatch(setPage({ page }));
  };
  const addPackHandler = (packName: string) => {
    // const packName = prompt('Enter new pack name', ''); // eslint-disable-line no-alert
    if (packName) {
      dispatch(addPack({ name: packName, isPrivate }));
    }
  };

  const debouncedInput = useDebounce((text: string) => {
    dispatch(setSearchValue({ packName: text }));
  }, 500);

  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const text = e && e.currentTarget.value;
    debouncedInput(text);
  };

  return (
    <ContentWrapper>
      <h2 className={s.title}>Packs list</h2>
      <span />
      <div className={s.packPage}>
        <Magnifier />
        <Input
          placeholder="Search"
          variant="search"
          type="text"
          onInput={onInputHandler}
        />
        <AddPackModal addPackHandler={addPackHandler} />
      </div>
      <Packs />
      <div>
        <Pagination
          pageSize={pageSize}
          totalCount={totalCount}
          onChangePageHandler={onChangePageHandler}
        />
      </div>
    </ContentWrapper>
  );
};
