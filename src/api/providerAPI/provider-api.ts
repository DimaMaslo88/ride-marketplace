import { instanceProvider } from '../providerAPI/instanceProvider';
import {
  LoginProviderType,
  ResponseLoginProviderType,
} from '../providerAPI/ProviderTypes/ProviderTypes';

export const ProviderApi = {
  providerRegistration(data: LoginProviderType) {
    return instanceProvider.post<ResponseLoginProviderType>(
      '/api/users/login',
      data
    );
  },
  providerLogOut() {
    return instanceProvider.post('/api/users/logout');
  },
};
