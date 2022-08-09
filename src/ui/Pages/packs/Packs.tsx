import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectPacks } from '../../../bll/selectors/selectors';
import {
  setPacks,
  setRangeValue,
  setSearchValue,
  setSortPacks,
} from '../../../bll/slices/packsReducer';
import { AppRootStateType, useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import Button from '../../components/button/Button';
import DoubleRangeInput from '../../components/doubleRangeInput/DoubleRangeInput';
import { Input } from '../../components/input/Input';
import { Pack } from '../../components/Pack/Pack';

import s from './Packs.module.scss';

export const Packs = () => {
  const dispatch = useAppDispatch();
  const { cardsPack, sortPacks } = useSelector(selectPacks);
  const min1 = useSelector((state: AppRootStateType) => state.packs.min);
  const max1 = useSelector((state: AppRootStateType) => state.packs.max);
  const [filterOrder, setFilterOrder] = useState(0);

  const changeFilterValue = (filterName: string) => {
    setFilterOrder(filterOrder === 0 ? 1 : 0);
    dispatch(setSortPacks({ filterOrder, filterName }));
  };

  useEffect(() => {
    dispatch(setPacks());
  }, [sortPacks, min1, max1]);

  const debouncedInput = useDebounce((packName: string) => {
    dispatch(setSearchValue({ packName }));
  }, 500);

  const onChangeHandler = ({ min, max }: { min: number; max: number }) => {
    // console.log(`min = ${min}, max = ${max}`);
    debouncedRange(min, max);
  };

  const debouncedRange = useDebounce((minVal: number, maxVal: number) => {
    dispatch(setRangeValue({ min: minVal, max: maxVal }));
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
      <DoubleRangeInput min={1} max={100} onChange={onChangeHandler} />
    </div>
  );
};
