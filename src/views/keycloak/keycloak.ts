import { KeycloakService } from "@/services/keycloak.service";
import { Options, Vue } from "vue-class-component";

@Options({
  name: 'keycloak',
})
export default class Header extends Vue {

  getAccessToken() {
    return KeycloakService.getAccessToken();
  }

  getUserRoles() {
    return KeycloakService.getUserRoles();
  }
}
