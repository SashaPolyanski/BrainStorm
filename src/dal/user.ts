import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const user = {
  getUser(userId: string) {
    return instance.get(Url.GET_USER, {});
  },
  updateUserAvatar(avatar?: string, name?: string) {
    return instance.put('auth/me', { avatar, name }).then(res => res.data.updatedUser);
  },
};
