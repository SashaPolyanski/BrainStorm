import { Url } from '../common/constants/constants';
import { GetPacksType } from '../common/types/requestTypes';
import { PacksResponseType } from '../common/types/ResponseTypes';

import { instance } from './settings';

export const fetchPacks = {
  getPacks(params: Partial<GetPacksType>) {
    return instance.get<PacksResponseType>(Url.GET_PACKS, { params: { ...params } });
  },
};
