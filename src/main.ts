import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.scss';
import { KeycloakService } from '@/services/keycloak.service';

const renderApp = () => {
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount('#app');
};

KeycloakService.init(renderApp);
