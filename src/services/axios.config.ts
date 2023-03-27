import axios from 'axios';
import { KeycloakService } from '@/services/keycloak.service';
import axiosRetry from 'axios-retry';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
});

axiosRetry(httpClient, {
  retries: 3, // number of retries
  retryDelay: (retryCount) => {
    return retryCount * 2000; // time interval between retries
  },
  retryCondition: (error) => {
    // if retry condition is not specified, by default idempotent requests are retried
    return error.response?.status === 503;
  },
});

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = KeycloakService.getAccessToken();
    accessToken && config.headers.setAuthorization(`Bearer ${accessToken}`);
    return config;
  },
  (error) => {
    Promise.reject(error).then();
  }
);

export default httpClient;
