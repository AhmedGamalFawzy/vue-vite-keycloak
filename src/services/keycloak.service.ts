import Keycloak from 'keycloak-js';

interface CallbackOneParam<T1 = void, T2 = void> {
  (param1: T1): T2;
}

const keycloak = new Keycloak({
  url: import.meta.env.VITE_REDIRECT_URL,
  realm: import.meta.env.VITE_REALM,
  clientId: import.meta.env.VITE_CLIENT_ID,
});

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const init = (onAuthenticatedCallback: CallbackOneParam) => {
  keycloak
    .init({ onLoad: 'login-required' })
    .then((authenticated) => {
      authenticated ? onAuthenticatedCallback() : alert('non authenticated');

      //Token Refresh
      setInterval(() => {
        keycloak.updateToken(70).catch(() => {
          console.error('Failed to refresh token');
        });
      }, 6000);
    })
    .catch((e) => {
      console.error('keycloak init exception:', e);
    });
};

const getUsername = (): string | undefined => keycloak.tokenParsed?.preferred_username;

const getAccessToken = (): string | undefined => keycloak.token;

const logout = () => keycloak.logout();

const getUserRoles = (): string[] | undefined => {
  if (keycloak.resourceAccess === undefined) return undefined;
  return keycloak.resourceAccess[import.meta.env.VITE_CLIENT_ID].roles;
};

export const KeycloakService = {
  init,
  logout,
  getUsername,
  getAccessToken,
  getUserRoles,
};
