import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectLoading } from '../../../../bll/selectors/selectors';
import { setSortCards } from '../../../../bll/slices/cardsSlice';
import { useAppDispatch } from '../../../../bll/store';
import Button from '../../button/Button';
import LinearPreloader from '../../linearPreloader/LinearPreloader';

import s from './CardsHeader.module.scss';

export const CardsHeader = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useAppDispatch();
  const [filterOrder, setFilterOrder] = useState(0);

  const changeFilterValue = (filterName: string) => {
    setFilterOrder(filterOrder === 0 ? 1 : 0);
    dispatch(setSortCards({ filterOrder, filterName }));
  };
  return (
    <div>
      {loading && <LinearPreloader />}
      <div className={s.cardsHeader}>
        <div className={s.question}>
          <Button
            variant="hidden"
            name="Question"
            onClick={() => changeFilterValue('question')}
          />
        </div>

        <div className={s.answer}>
          <Button
            variant="hidden"
            name="Answer"
            onClick={() => changeFilterValue('answer')}
          />
        </div>

        <div className={s.lastUpdate}>
          <Button
            variant="hidden"
            name="Last Updated"
            onClick={() => changeFilterValue('updated')}
          />
        </div>
        <div className={s.grade}>
          <Button
            variant="hidden"
            name="Grade"
            onClick={() => changeFilterValue('grade')}
          />
        </div>
      </div>
    </div>
  );
};
