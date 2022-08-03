import { instance } from './settings';

export const auth = {
  login(data: any) {
    return instance.post<any>('/auth/login', data);
  },
  logout() {
    return instance.delete('/auth/me');
  },
  me() {
    return instance.post<any>('/auth/me');
  },
  register(email: string, password: string) {
    return instance.post<any>('/auth/register', { email, password });
  },
  updateMe(name: string, avatar: string) {
    return instance.put('auth/me', { name, avatar });
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
