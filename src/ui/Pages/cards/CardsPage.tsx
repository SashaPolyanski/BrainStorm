import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCards, selectPacks, selectUser } from '../../../bll/selectors/selectors';
import {
  addCard,
  clearQuestionAnswerName,
  setCardQuestionName,
  setCards,
} from '../../../bll/slices/cardsSlice';
import { setSearchValue } from '../../../bll/slices/packsSlice';
import { AppRootStateType, useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import Button from '../../components/button/Button';
import { Cards } from '../../components/cards/Cards';
import { Input } from '../../components/input/Input';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './CardsPage.module.scss';

export const CardsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { cardsPack } = useSelector(selectPacks);

  const currentPack = cardsPack.find(el => el._id === id);

  useEffect(
    () => () => {
      dispatch(clearQuestionAnswerName());
    },
    [],
  );

  const addCardHandler = () => {
    const question = prompt('Enter the question', ''); // eslint-disable-line no-alert
    const answer = prompt('Enter the answer', ''); // eslint-disable-line no-alert
    if (answer && question && id) {
      dispatch(addCard({ cardsPack_id: id, answer, question }));
    }
  };

  const debouncedInput = useDebounce((text: string) => {
    dispatch(setCardQuestionName({ question: text }));
  }, 500);

  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const text = e && e.currentTarget.value;
    debouncedInput(text);
  };

  return (
    <ContentWrapper>
      <h2 className={s.cardTitle}>Pack {currentPack && currentPack.user_name}</h2>
      <div className={s.cardPage}>
        <Input type="text" variant="search" onInput={onInputHandler} />
        <Button variant="auth" name="AddCard" onClick={addCardHandler} />
      </div>
      <Cards packId={id} />
    </ContentWrapper>
  );
};
