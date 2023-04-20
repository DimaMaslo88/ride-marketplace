import { ResponseAuthUserType, ResponseUserDataType } from '../api/types/types';
import { instance } from './instance';

export const authApi = {
  loginUser(phoneNumber: string) {
    return instance.post<ResponseAuthUserType>('/auth/authentication', {
      phoneNumber,
    });
  },
  authorizationUser(phoneNumber: string, code: string) {
    return instance.post<ResponseUserDataType>('/auth/login', {
      phoneNumber,
      code,
    });
  },
  authMe() {
    return instance.post<ResponseUserDataType>('/auth/refresh-token');
  },
  logOutUser() {
    return instance.post('/auth/logout');
  },
};
