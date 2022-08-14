import React, { useState } from 'react';

import { setSortCards } from '../../../../bll/slices/cardsSlice';
import { useAppDispatch } from '../../../../bll/store';
import Button from '../../button/Button';

import s from './CardsHeader.module.scss';

export const CardsHeader = () => {
  const dispatch = useAppDispatch();
  const [filterOrder, setFilterOrder] = useState(0);

  const changeFilterValue = (filterName: string) => {
    setFilterOrder(filterOrder === 0 ? 1 : 0);
    dispatch(setSortCards({ filterOrder, filterName }));
  };
  return (
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
  );
};
