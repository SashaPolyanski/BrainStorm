import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Magnifier } from '../../../assets/svg/Magnifier';
import {
  selectPacks,
  selectPageCount,
  selectPageSize,
} from '../../../bll/selectors/selectors';
import {
  addCard,
  clearQuestionAnswerName,
  setCardQuestionName,
  setCardsPage,
} from '../../../bll/slices/cardsSlice';
import { useAppDispatch } from '../../../bll/store';
import { useDebounce } from '../../../bll/utils/useDebounce';
import { Cards } from '../../components/cards/Cards';
import { Input } from '../../components/input/Input';
import AddCardModal from '../../components/modals/modalContent/addCardModal/AddCardModal';
import Pagination from '../../components/Pagination/Pagination';
import { ContentWrapper } from '../../styles/contentWrapper/ContentWrapper';

import s from './CardsPage.module.scss';

export const CardsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { cardsPack } = useSelector(selectPacks);
  const totalCount = useSelector(selectPageCount);
  const pageSize = useSelector(selectPageSize);

  const currentPack = cardsPack.find(el => el._id === id);
  const onChangePageHandler = (page: number) => {
    dispatch(setCardsPage({ page }));
  };
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

  const debouncedInputTest = useDebounce((text: string) => {
    dispatch(setCardQuestionName({ question: text }));
  }, 500);

  const onInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const inputText = e && e.currentTarget.value;
    debouncedInputTest(inputText);
  };

  return (
    <ContentWrapper>
      <h2 className={s.cardTitle}>Pack {currentPack && currentPack.user_name}</h2>
      <div className={s.cardPage}>
        <Magnifier />
        <Input
          type="text"
          variant="search"
          placeholder="Search"
          onInput={onInputHandler}
        />
        {/* <Button variant="auth" name="AddCard" onClick={addCardHandler} /> */}
        <AddCardModal addCardHandler={addCardHandler} />
      </div>
      <Cards packId={id} />
      <Pagination
        pageSize={pageSize}
        totalCount={totalCount}
        onChangePageHandler={onChangePageHandler}
      />
    </ContentWrapper>
  );
};
