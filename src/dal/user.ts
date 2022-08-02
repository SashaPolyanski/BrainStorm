import { instance } from './settings';

export const user = {
  getUser(userId: any) {
    return instance.get('/cards/pack', {});
  },
};
