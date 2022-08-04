import { IFormInputs } from '../ui/Pages/login/Login';

import { instance } from './settings';

export const auth = {
  login(data: IFormInputs) {
    return instance.post<IResponseAuthLoginData>('/auth/login', data);
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

export interface IResponseAuthLoginData {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
  // количество колод

  created: Date;
  updated: Date;
  isAdmin: boolean;
  verified: boolean; // подтвердил ли почту
  rememberMe: boolean;

  error?: string;
}
