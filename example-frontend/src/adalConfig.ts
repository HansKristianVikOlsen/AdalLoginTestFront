import { AuthenticationContext, AdalConfig } from "react-adal";

export const adalConfig: AdalConfig = {
  tenant: "bouvetasa.onmicrosoft.com",
  clientId: "5f033dab-7a41-4aef-b072-10dfb1e655b3",
  redirectUri: "http://localhost:3000",
  endpoints: {
    api: "bouvetasa.onmicrosoft.com/5f033dab-7a41-4aef-b072-10dfb1e655b3"
  },
  cacheLocation: "sessionStorage"
};

export const authContext = new AuthenticationContext(adalConfig);

export const getToken = () => authContext.getCachedToken(adalConfig.clientId);

export const getAuthContext = () => {
  return authContext;
};
