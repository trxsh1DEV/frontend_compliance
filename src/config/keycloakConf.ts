import Keycloak from "keycloak-js";

const _kc = new Keycloak({
  url: import.meta.env.VITE_URL, // URL do Keycloak
  realm: import.meta.env.VITE_REALM,
  clientId: import.meta.env.VITE_CLIENT_ID,
});

const initKeycloak = (onAuthenticatedCallback: any) => {
  _kc
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`,
      pkceMethod: "S256",
      checkLoginIframe: false,
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      }
      onAuthenticatedCallback();
    })
    .catch(console.error);
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const getTokenParsed = () => _kc.tokenParsed;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback: any) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles: [string]) =>
  roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  getTokenParsed,
  updateToken,
  getUsername,
  hasRole,
};

export default UserService;
