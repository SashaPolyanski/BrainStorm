import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const user = {
  getUser(userId: string) {
    return instance.get(Url.GET_USER, {});
  },
  updateUserAvatar(avatar: string) {
    return instance.put('auth/me', { avatar }).then(res => res.data.updatedUser.avatar);
  },
};
