import React from 'react';

import { CardType } from '../../../../dal/cards';
import Rating from '../rating/Rating';

import s from './Card.module.scss';

export const Card = ({ card }: CardsPropsType) => {
  const { question, answer, updated, grade, _id, cardsPack_id } = card;
  const updatedDate = updated.slice(0, 10).split('-').reverse().join('-');
  return (
    <div className={s.card}>
      <div className={s.text}>{question}</div>
      <div className={s.text}>{answer} </div>
      <div>{updatedDate}</div>
      <Rating grade={grade} id={_id} packID={cardsPack_id} />
    </div>
  );
};

type CardsPropsType = {
  card: CardType;
};
