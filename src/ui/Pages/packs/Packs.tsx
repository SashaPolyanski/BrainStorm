import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectLoading, selectPacks } from '../../../bll/selectors/selectors';
import { setPacks, setSortPacks } from '../../../bll/slices/packsSlice';
import { useAppDispatch } from '../../../bll/store';
import Button from '../../components/button/Button';
import LinearPreloader from '../../components/linearPreloader/LinearPreloader';
import Modal from '../../components/modals/modal/Modal';
import { Pack } from '../../components/Pack/Pack';

import s from './Packs.module.scss';

export const Packs = () => {
  const dispatch = useAppDispatch();
  const loading = useSelector(selectLoading);
  const { cardsPack, sortPacks, min, max, packName, page, user_id } =
    useSelector(selectPacks);
  const [filterOrder, setFilterOrder] = useState(0);

  const changeFilterValue = (filterName: string) => {
    setFilterOrder(filterOrder === 0 ? 1 : 0);
    dispatch(setSortPacks({ filterOrder, filterName }));
  };

  useEffect(() => {
    dispatch(setPacks());
  }, [sortPacks, min, max, packName, user_id, page]);

  return (
    <div className={s.wrapper}>
      {loading && <LinearPreloader />}
      <div className={s.header}>
        <div className={s.nameWrapper}>
          <Button
            onClick={() => changeFilterValue('name')}
            variant="hidden"
            name="Name"
          />
        </div>
        <div className={s.cardWrapper}>
          <Button
            onClick={() => changeFilterValue('cardsCount')}
            variant="hidden"
            name="Card"
          />
        </div>
        <div className={s.lastUpdateWrapper}>
          <Button
            onClick={() => changeFilterValue('updated')}
            variant="hidden"
            name="Last Updated"
          />
        </div>

        <div className={s.createByWrapper}>Created By</div>
      </div>
      <div className={s.packsContainer}>
        {cardsPack.map(pack => (
          <Pack key={pack._id} pack={pack} />
        ))}
      </div>
    </div>
  );
};
