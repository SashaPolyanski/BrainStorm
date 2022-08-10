import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { cardsApi, CardType } from '../../dal/cards';
import { AppRootStateType } from '../store';

import { setIsLoading } from './appSlice';

export const setCards = createAsyncThunk(
  'cards/setCards',
  async (packId: string, { dispatch, getState }) => {
    const { cards } = getState() as AppRootStateType;
    const { cardAnswer, cardQuestion, sortCards, page, pageCount } = cards;
    const payload = {
      cardAnswer,
      cardQuestion,
      cardsPack_id: packId,
      min: 0,
      max: 5,
      sortCards,
      page,
      pageCount,
    };
    try {
      dispatch(setIsLoading({ loading: true }));
      const { data } = await cardsApi.fetchCards(payload);
      return data;
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const addCard = createAsyncThunk(
  'cards/addCard',
  async (
    param: { cardsPack_id: string; question: string; answer: string },
    { dispatch },
  ) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      await cardsApi.addCard(param);
      dispatch(setCards(param.cardsPack_id));
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const editeCard = createAsyncThunk(
  'cards/editeCard',
  async (
    param: {
      cardsPack_id: string;
      _id: string;
      question: string;
      answer: string;
      comments?: string;
    },
    { dispatch },
  ) => {
    const { cardsPack_id, _id, question, answer, comments } = param;
    try {
      dispatch(setIsLoading({ loading: true }));
      await cardsApi.editCard({ _id, question, comments });
      dispatch(setCards(param.cardsPack_id));
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (param: { cardsPack_id: string; cardsId: string }, { dispatch }) => {
    try {
      dispatch(setIsLoading({ loading: true }));
      await cardsApi.deleteCard(param.cardsId);
      dispatch(setCards(param.cardsPack_id));
    } catch (err) {
      const error = err as AxiosError;
    } finally {
      dispatch(setIsLoading({ loading: false }));
    }
  },
);

export const slice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 0,
    minGrade: 0,
    page: 1,
    pageCount: 2,
    packUserId: '',
    cardAnswer: '',
    cardQuestion: '',
    packId: '',
    sortCards: '0updated',
  } as initialStateType,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setCards.fulfilled, (state, action) => {
      if (action.payload) {
        state.cards = action.payload.cards;
      }
    });
  },
});

type initialStateType = {
  cards: Array<CardType>;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
  cardAnswer: string;
  cardQuestion: string;
  packId: string;
  sortCards: string;
};

export const cardsSlice = slice.reducer;
