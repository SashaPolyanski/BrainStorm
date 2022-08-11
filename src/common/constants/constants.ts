export enum Url {
  LOGIN = '/auth/login',
  LOGOUT = '/auth/me',
  AUTH_ME = '/auth/me',
  REGISTER = '/auth/register',
  UPDATE_ME = '/auth/me',
  PACKS_URL = '/cards/pack',
  GET_USER = '/cards/pack',
  CARDS_URL = '/cards/card',
  FORGOT = 'auth/forgot',
  SET_NEW_PASSWORD = 'auth/set-new-password',
}
export enum PATH {
  LOGIN = '/',
  REGISTRATION = '/registration',
  PROFILE = '/profile',
  SEND_EMAIL = '/send-email',
  NEW_PASSWORD = '/new-password/:token',
  CHECK_EMAIL = '/check-email',
  NOT_FOUND = '/404',
  EDIT_PROFILE = '/edit-profile',
  PACKS = '/packs',
  CARDS = '/cards/:id',
}
