export const auth0Config = {
 clientId: 'y0MHdPxvQnDLv9H7Fl6cebD3j4hUw9I1',
 issuer: "dev-dkgehxst2nqk88lm.eu.auth0.com",
 audience: "http://localhost:8080",
 redirectUri: window.location.origin + "/login/callback",
 scope: 'openid profile email offline_access'
}