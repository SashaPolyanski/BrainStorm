import { instance } from './settings';

export const packs = {
  getPacks(params: any) {
    return instance.get('/cards/pack', { params: { ...params } });
  },
};
