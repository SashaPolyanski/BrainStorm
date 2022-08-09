export type GetPacksType = {
  packName?: string; // не обязательно
  min?: number; // не обязательно
  max?: number; // не обязательно
  sortPacks?: string; // не обязательно
  page?: number; // не обязательно
  pageCount?: number; // не обязательно
  user_id?: string; // чьи колоды не обязательно, или прийдут все
  totalCount?: number; // не обязательно
  maxCardsCount?: number; // не обязательно
};
