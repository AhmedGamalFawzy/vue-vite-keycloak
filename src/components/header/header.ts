import { Options, Vue } from "vue-class-component";
import { KeycloakService } from "@/services/keycloak.service";

@Options({
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
