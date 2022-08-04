import { Url } from '../common/constants/constants';
import { ResponseLoginType } from '../common/types/ResponseTypes';

import { instance } from './settings';

export const auth = {
  login(data: any) {
    return instance.post<ResponseLoginType>(Url.LOGIN, data);
  },
  logout() {
    return instance.delete(Url.LOGOUT);
  },
  me() {
    return instance.post<ResponseLoginType>(Url.AUTH_ME);
  },
  register(email: string, password: string) {
    return instance.post(Url.REGISTER, { email, password });
  },
  updateMe(name?: string, avatar?: string) {
    return instance.put<ResponseLoginType>(Url.UPDATE_ME, { name, avatar });
  },
  sendEmail(email: string) {
    return instance.post(Url.FORGOT, {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div style="background-color: lime; padding: 15px">
      password recovery link: 
      <a href='http://localhost:3000/#/set-new-password/$token$'>
      link</a>
      </div>`,
    });
  },
  sendNewPassword(password: string, token: string | undefined) {
    return instance.post(Url.SET_NEW_PASSWORD, { password, token });
  },
};
