import axios from 'axios';
import config from '../config';

const axiosSwapi = axios.create({
  baseURL: `${config.swapiUrl}`
});

axiosSwapi.interceptors.response.use(
  ({ data }) => data,
  async err => {
    return Promise.reject(err.response);
  }
);

export default axiosSwapi;
