import axios from 'axios';
import { KeycloakService } from '@/services/keycloak.service';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000
});

httpClient.interceptors.request.use(
  (config) => {
    const accessToken = KeycloakService.getAccessToken();
    accessToken && config.headers.setAuthorization(`Bearer ${accessToken}`);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default httpClient;
