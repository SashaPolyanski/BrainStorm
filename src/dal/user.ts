import { instance } from './settings';

export const packs = {
  getUser(userId: any) {
    return instance.get('/cards/pack', {});
  },
};
