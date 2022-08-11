import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectPacks } from '../../../bll/selectors/selectors';
import { setPacks, setSortPacks } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import Button from '../../components/button/Button';
import { Pack } from '../../components/Pack/Pack';

import s from './Packs.module.scss';

export const Packs = () => {
  const dispatch = useAppDispatch();
  const { cardsPack, sortPacks, min, max, packName, user_id } = useSelector(selectPacks);
  const [filterOrder, setFilterOrder] = useState(0);

  const changeFilterValue = (filterName: string) => {
    setFilterOrder(filterOrder === 0 ? 1 : 0);
    dispatch(setSortPacks({ filterOrder, filterName }));
  };

  useEffect(() => {
    dispatch(setPacks());
  }, [sortPacks, min, max, packName, user_id]);

  return (
    <div className={s.wrapper}>
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
      <div className={s.packsContainer}>
        {cardsPack.map(pack => (
          <Pack key={pack._id} pack={pack} />
        ))}
      </div>
    </div>
  );
};
