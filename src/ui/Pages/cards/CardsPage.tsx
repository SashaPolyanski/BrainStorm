import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectPacks, selectUser } from '../../../bll/selectors/selectors';
import { addCard } from '../../../bll/slices/cardsSlice';
import { useAppDispatch } from '../../../bll/store';
import Button from '../../components/button/Button';
import { Cards } from '../../components/cards/Cards';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './CardsPage.module.scss';

export const CardsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { cardsPack } = useSelector(selectPacks);
  const currentPack = cardsPack.find(el => el._id === id);

  const addCardHandler = () => {
    const question = prompt('Enter the question', ''); // eslint-disable-line no-alert
    const answer = prompt('Enter the answer', ''); // eslint-disable-line no-alert
    if (answer && question && id) {
      dispatch(addCard({ cardsPack_id: id, answer, question }));
    }
  };
  return (
    <ContentWrapper>
      <h2 className={s.cardTitle}>Pack {currentPack && currentPack.user_name}</h2>
      <div className={s.cardPage}>
        <input type="text" placeholder="INPUT BUDET TUT" />
        <Button variant="auth" name="AddCard" onClick={addCardHandler} />
      </div>
      <Cards packId={id} />
    </ContentWrapper>
  );
};
