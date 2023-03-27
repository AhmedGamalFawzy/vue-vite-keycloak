import { KeycloakService } from '@/services/keycloak.service';
import { Component, Vue } from 'vue-facing-decorator';

@Component({
  name: 'keycloak',
})
export default class Keycloak extends Vue {
  getAccessToken() {
    return KeycloakService.getAccessToken();
  }

  getUserRoles() {
    return KeycloakService.getUserRoles();
  }
}
