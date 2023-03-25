import { Component, Vue } from "vue-facing-decorator";
import { KeycloakService } from "@/services/keycloak.service";

@Component({
  name: 'app-header',
})
export default class Header extends Vue {

  getCurrentUsername() {
    return KeycloakService.getUsername();
  }

  logout() {
    return KeycloakService.logout();
  }
}
