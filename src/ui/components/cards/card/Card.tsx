import React from 'react';

import { CardType } from '../../../../dal/cards';

import s from './Card.module.scss';

export const Card = ({ card }: CardsPropsType) => {
  const { question, answer, updated, grade } = card;
  return (
    <div className={s.card}>
      <div>{question}</div>
      <div>{answer} </div>
      <div>{updated}</div>
      <div>{grade}</div>
    </div>
  );
};

type CardsPropsType = {
  card: CardType;
};
