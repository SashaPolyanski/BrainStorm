import React from 'react';

import { CardType } from '../../../../dal/cards';
import Rating from '../rating/Rating';

import s from './Card.module.scss';

export const Card = ({ card }: CardsPropsType) => {
  const { question, answer, updated, grade, _id, cardsPack_id } = card;
  return (
    <div className={s.card}>
      <div>{question}</div>
      <div>{answer} </div>
      <div>{updated}</div>
      <Rating grade={grade} id={_id} packID={cardsPack_id} />
    </div>
  );
};

type CardsPropsType = {
  card: CardType;
};
