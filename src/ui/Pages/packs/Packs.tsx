import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectPacks } from '../../../bll/selectors/selectors';
import { setPacks, setSearchValue, setSortPacks } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import Button from '../../components/button/Button';
import DoubleRangeInput from '../../components/doubleRangeInput/DoubleRangeInput';
import { Input } from '../../components/input/Input';
import { Pack } from '../../components/Pack/Pack';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './Packs.module.scss';

export const Packs = () => {
  const dispatch = useAppDispatch();
  const { cardsPack, sortPacks, min, max, packName } = useSelector(selectPacks);
  const [filterOrder, setFilterOrder] = useState(0);

  const changeFilterValue = (filterName: string) => {
    setFilterOrder(filterOrder === 0 ? 1 : 0);
    dispatch(setSortPacks({ filterOrder, filterName }));
  };

  useEffect(() => {
    dispatch(setPacks());
  }, [sortPacks, min, max, packName]);

  const debouncedInput = useDebounce((text: string) => {
    dispatch(setSearchValue({ packName: text }));
  }, 500);

  const onInputHandler = (e: any) => {
    const text = e && e.currentTarget.value;
    debouncedInput(text);
  };

  return (
    <div className={s.packsWrapper}>
      <div className={s.header}>
        <Button onClick={() => changeFilterValue('name')} variant="hidden" name="Name" />
        <Button
          onClick={() => changeFilterValue('cardsCount')}
          variant="hidden"
          name="Card"
        />
        <Button
          onClick={() => changeFilterValue('updated')}
          variant="hidden"
          name="Last Updated"
        />
        <div>Created By</div>
      </div>
      {cardsPack.map(pack => (
        <Pack key={pack._id} pack={pack} />
      ))}
      <Input type="text" onInput={onInputHandler} />
      <DoubleRangeInput min={1} max={100} />
    </div>
  );
};
