import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi ,{LOGIN_URL } from "../../../lib/spotify";

async function refreshAccessToken(token){
try{
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.refreshAccessToken(token.accessToken);
    const {body : refreshedToken} = await spotifyApi.refreshAccessToken();
    console.log("refreshed token",refreshedToken);
    return{
        ...token,
        accessToken: refreshedToken.access_token,
        accessTokenExpires:Date.now() + refreshedToken.expires_in + 1000,
        refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
   
    }
}
catch(error){
    console.error(error)
    return{
        ...token,
        error:'RefreshAccessTokenError'
    };
}

}
const options =  {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
      }),
    SpotifyProvider({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        authorizationUrl: LOGIN_URL
      }),
  ],
  secret: process.env.JWT_SECRET,
pages:{
    signIn:'/login'
},
  callbacks: {
      async jwt(token, account,user){
          if(account && user){
              return{
                  ...token,
                  accessToken : account.access_token,
                  refreshToken : account.refresh_token,
                  username: account.providerAccountId,
                  accessTokenExpires: account.expires_at *1000,

              }
            }
if(Date.now() < token.accessTokenExpires){
    console.log("access token valid");
    return token;
}
console.log("access token expired");
return await refreshAccessToken(token)
      },

async session({session,token}){
    session.user.accessToken = token.accessToken;
    session.user.refreshToken= token.refreshToken;
    session.user.username= token.username;

    return session;
},
      redirect: async(url, _baseUrl) => {
          if(url === '/profile'){
              return Promise.resolve('/');
          }
          return Promise.resolve('/');
      }
  }
};

export default (req,res) => NextAuth(req,res,options);