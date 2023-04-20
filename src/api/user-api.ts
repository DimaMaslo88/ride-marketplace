import { instance } from './instance';
import { GetUserResponseType } from './types/types';

export const UserApi = {
  showUser() {
    return instance.get<GetUserResponseType>('/users/profile');
  },
};
