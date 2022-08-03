import { Url } from '../common/constants/constants';

import { instance } from './settings';

export const auth = {
  login(data: any) {
    return instance.post<any>(Url.LOGIN, data);
  },
  logout() {
    return instance.delete(Url.LOGOUT);
  },
  me() {
    return instance.post<any>(Url.AUTH_ME);
  },
  register(email: string, password: string) {
    return instance.post<any>(Url.REGISTER, { email, password });
  },
  updateMe(name: string, avatar: string) {
    return instance.put(Url.UPDATE_ME, { name, avatar });
  },
};
