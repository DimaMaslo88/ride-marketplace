import axios from 'axios';

export const instanceProvider = axios.create({
  baseURL: 'https://endpoint-vendor.rite-way.ru',
  withCredentials: true,
});
