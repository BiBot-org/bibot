import { keycloakSignIn, reissueToken } from "@/service/auth/AuthService";
import { NextAuthOptions, Session, SessionUser, User } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { TokenRes } from "@/types/auth/types";

export const jwtCallback = async ({
  token,
  user,
}: {
  token: JWT;
  user: User;
}) => {
  console.log("jwt callback 발동");

  if (token?.expiresIn) {
    if (Math.floor(Date.now() / 1000) < token.expiresIn!!) {
      console.log("아무일도 없음");
      console.log(token, user);
      return { ...token, ...user };
    } else if (
      token.refreshToken &&
      Math.floor(Date.now() / 1000) < token.refreshExpiresIn!!
    ) {
      console.log("토큰 재발급");
      const newTokenData: TokenRes = await reissueToken(token.refreshToken);
      token.accessToken = newTokenData.accessToken;
      token.refreshToken = newTokenData.refreshToken;
      token.expiresIn = newTokenData.expiresIn;
      token.refreshExpiresIn = newTokenData.refreshExpiresIn;
      console.log(token, user);
      return { ...token, ...newTokenData };
    }
  }
  console.log("로그인");

  token.accessToken = user.tokenRes.accessToken;
  token.refreshToken = user.tokenRes.refreshToken;
  token.expiresIn = user.tokenRes.expiresIn;
  token.refreshExpiresIn = user.tokenRes.refreshExpiresIn;
  const sessionUser: SessionUser = {
    id: user.id,
    roles: user.roles,
  };
  console.log(token, user);
  return { ...token, ...sessionUser };
};

export const session = ({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}): Promise<Session> => {
  console.log("세션 콜백 발동");
  if (
    Math.floor(Date.now() / 1000) > token?.expiresIn! &&
    token?.refreshTokenExpires &&
    Math.floor(Date.now() / 1000) > token?.refreshExpiresIn!
  ) {
    console.log("세션 만료");
    return Promise.reject({
      error: new Error("토큰이 만료되었습니다. 재 로그인 해 주세요."),
    });
  }

  console.log(session, token);
  session.tokenInfo = token;
  return Promise.resolve(session);
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "keycloak",
      name: "keycloak",
      credentials: {
        username: {
          label: "Username",
          type: "email",
          placeholder: "유저 이메일",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return await keycloakSignIn(
          credentials?.username as string,
          credentials?.password as string
        )
          .then((res) => {
            return res;
          })
          .catch(() => Promise.reject());
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: jwtCallback,
    session: session,
  },
};

export default NextAuth(authOptions);
