import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';

import { selectCards } from '../../../bll/selectors/selectors';
import { setCards } from '../../../bll/slices/cardsSlice';
import { useAppDispatch } from '../../../bll/store';

import { Card } from './card/Card';
import s from './Cards.module.scss';
import { CardsHeader } from './cardsHeader/CardsHeader';

export const Cards = ({ packId }: CardsPropsType) => {
  const dispatch = useAppDispatch();

  const { cards, sortCards, cardQuestion } = useSelector(selectCards);

  useEffect(() => {
    if (packId) {
      dispatch(setCards(packId));
    }
  }, [sortCards, cardQuestion]);

  return (
    <div className={s.wrapper}>
      <CardsHeader />
      <div className={s.cardsContainer}>
        {cards.map(card => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

type CardsPropsType = {
  packId: string | undefined;
};
