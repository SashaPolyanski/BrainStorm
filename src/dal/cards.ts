import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const cardsApi = {
  fetchCards(params: FetchCardsParamType) {
    return instance.get<CardsResponseType>(Url.CARDS_URL, { params: { ...params } });
  },
  addCard(card: { cardsPack_id: string; question: string; answer: string }) {
    return instance.post(Url.CARDS_URL, { card });
  },
  editCard(card: { _id: string; question?: string; comments?: string }) {
    return instance.put(Url.CARDS_URL, { card });
  },
  deleteCard(cardId: string) {
    return instance.delete(Url.CARDS_URL, { params: { cardId } });
  },
  changeGrade(grade: number, card_id: string) {
    return instance.put(Url.GRADE, { grade, card_id });
  },
};

export type FetchCardsParamType = {
  cardAnswer?: string;
  cardQuestion?: string;
  cardsPack_id: string; // обязательно!
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
};

export type CardType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};

type CardsResponseType = {
  cards: Array<CardType>;
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: '';
};
