export interface TokenResponseRaw {
  access_token: string;
  expires_in: string;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  not_before_policy: number;
  session_state: string;
  scope: string;
}

export interface UserRepresentation {
  id?: string;
  createdTimestamp?: number;
  username?: string;
  enabled?: boolean;
  totp?: boolean;
  emailVerified?: boolean;
  disableableCredentialTypes?: string[];
  access?: Record<string, boolean>;
  // optional from response
  attributes?: Record<string, any>;
  clientRoles?: Record<string, any>;
  email?: string;
  firstName?: string;
  groups?: string[];
  lastName?: string;
  origin?: string;
  realmRoles?: string[];
}

export interface TypeKeycloakInstance {
  didInitialize: boolean;
  authenticated: boolean;
  loginRequired: boolean;
  silentCheckSsoFallback: boolean;
  createLoginUrl: any;
  enableLogging: boolean;
  scope: string;
  messageReceiveTimeout: number;
  responseMode: string;
  responseType: string;
  flow: string;
  clientId: string;
  logout: any;
  authServerUrl: string;
  realm: string;
  login: any;
  endpoints: Record<string, any>;
  refreshToken: string;
  refreshTokenParsed: Record<string, any>;
  idToken: string;
  idTokenParsed: Record<string, any>;
  token: string;
  tokenParsed: Record<string, any>;
  sessionId: string;
  subject: string;
  realmAccess: { roles: string[] };
  resourceAccess: Record<string, { roles: string[] }>;
  timeSkew: number;
}
