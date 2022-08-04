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

  sendEmailAPI(email: string) {
    return instance.post<any>('auth/forgot', {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div style="background-color: lime; padding: 15px">
      password recovery link: 
      <a href='http://localhost:3000/#/set-new-password/$token$'>
      link</a>
      </div>`,
    });
  },
  sendNewPasswordAPI(password: string, resetPasswordToken: string | undefined) {
    return instance.post<any>('auth/set-new-password', { password, resetPasswordToken });
  },
};
