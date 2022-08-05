import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const fetchPacks = {
  getPacks(params: any) {
    return instance.get(Url.GET_PACKS, { params: { ...params } });
  },
};
