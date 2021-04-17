import { initAuth0 } from '@auth0/nextjs-auth0';

console.log('clientSecret',process.env.clientSecret);

export default initAuth0({
  domain: process.env.domain,
  clientID: process.env.clientId,
  clientSecret: process.env.clientSecret,
  issuerBaseURL: process.env.issuerBaseURL,
  secret: process.env.secret,
  scope: 'portfolio_application',
  redirectUri: process.env.redirectUri,
  postLogoutRedirectUri: process.env.postLogoutRedirectUri,
  // session: {
  //   cookieSecret: process.env.cookieSecret,
  //   cookieLifetime: 60 * 60 * 8,
  //   storeIdToken: false,
  //   storeAccessToken: false,
  //   storeRefreshToken: false,
  // },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 1000,
  }
});