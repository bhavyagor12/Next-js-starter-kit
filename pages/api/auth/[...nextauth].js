import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";


const options =  {
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
      }),
  ],
  jwt: {
      encryption: true,
  },
  secret: process.env.secret,

  callbacks: {
      async jwt(token, account){
          if(account?.access_token){
              token.access_token = account.access_token;
          }
          return token;

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