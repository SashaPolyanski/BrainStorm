import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const getUser = {
  getUser(userId: string) {
    return instance.get(Url.GET_USER, {});
  },
};
