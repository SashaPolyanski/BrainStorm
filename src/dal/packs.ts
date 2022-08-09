import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const packApi = {
  fetchPacks(params: Partial<GetPacksParamsType>) {
    return instance.get<PacksResponseType>(Url.PACKS_URL, { params: { ...params } });
  },
  addNewPack(cardsPack: { name: string; deckCover?: string; private?: boolean }) {
    return instance.post(Url.PACKS_URL, { cardsPack });
  },
  deletePack(id: string) {
    return instance.delete(Url.PACKS_URL, { params: { id } });
  },
  updatePack(cardsPack: { _id: string; name?: string }) {
    return instance.put(Url.PACKS_URL, { cardsPack });
  },
};

export type GetPacksParamsType = {
  packName: string;
  min: number;
  max: number;
  sortPacks: string;
  page: number;
  pageCount: number;
  user_id: string;
};

export type PacksResponseType = {
  cardPacks: Array<PacksType>;
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  token: string;
  tokenDeathTime: number;
};

export type PacksType = {
  cardsCount: number;
  created: string;
  deckCover: null;
  grade: number;
  more_id: string;
  name: string;
  path: string;
  private: boolean;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  user_name: string;
  __v: number;
  _id: string;
};
