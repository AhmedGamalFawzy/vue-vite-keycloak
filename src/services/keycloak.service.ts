import Keycloak from "keycloak-js";

const keycloakInstance = new Keycloak();

interface CallbackOneParam<T1 = void, T2 = void> {
  (param1: T1): T2;
}

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const login = (onAuthenticatedCallback: CallbackOneParam) => {
  keycloakInstance
    .init({ onLoad: "login-required" })
    .then(function (authenticated) {
      authenticated ? onAuthenticatedCallback() : alert("non authenticated");
    })
    .catch((e) => {
      console.dir(e);
      console.log(`keycloak init exception: ${e}`);
    });
};

const getUsername = (): string | undefined => keycloakInstance.tokenParsed?.preferred_username;

const getAccessToken = (): string | undefined => keycloakInstance.token;

const logout = () => keycloakInstance.logout();

const getUserRoles = (): string[] | undefined => {
  if (keycloakInstance.resourceAccess === undefined) return undefined;
  return keycloakInstance.resourceAccess["vuejs"].roles;
};

export const KeycloakService = {
  login,
  logout,
  getUsername,
  getAccessToken,
  getUserRoles,
}
