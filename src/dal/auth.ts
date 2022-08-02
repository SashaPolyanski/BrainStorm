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
};
