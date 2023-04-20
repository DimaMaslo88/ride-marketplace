import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://endpoint.rite-way.ru',
  withCredentials: true,
});

// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem(
//     'accessToken'
//   )}`;
//   return config;
// });

// export default instance;
