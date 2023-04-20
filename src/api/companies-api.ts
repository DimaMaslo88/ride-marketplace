import { instance } from '../api/instance';
import {
  GetCompaniesResponseType,
  OrdersRequestType,
} from '../api/types/types';
import { instanceProvider } from '../api/providerAPI/instanceProvider';

const settings = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
  },
};
export const CompaniesApi = {
  getCompanies() {
    return instance.get<GetCompaniesResponseType>('/Companies');
  },
  setOrdersToCompanies(params: OrdersRequestType) {
    // временное решение
    return instanceProvider.post('/api/client-orders', params, settings);
  },
};
