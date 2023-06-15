import { NextUIProvider, createTheme, useSSR } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactElement, ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import "../styles/globals.css";
import { Router, useRouter } from "next/router";
import { LoadingComponent } from "@/components/splash/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextNprogress from "nextjs-progressbar";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

export type NextPageWithLayout<P = {}, IP = P, auth = boolean> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: auth;
};

function Auth({ children: page }: { children: ReactNode }) {
  const { status } = useSession({ required: true });
  const router = useRouter();
  if (status === "loading") {
    return <LoadingComponent />;
  } else if (status !== "authenticated") {
    router.push("/login");
  }
  return <>{page}</>;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { isBrowser } = useSSR();

  const queryClient = new QueryClient();

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          {isBrowser &&
            getLayout(
              <NextThemeProvider
                defaultTheme="system"
                attribute="class"
                themes={[lightTheme, darkTheme]}
                value={{
                  light: lightTheme.className,
                  dark: darkTheme.className,
                }}
              >
                <NextUIProvider>
                  {Component.auth ? (
                    <Auth>
                      <Component {...pageProps} />
                    </Auth>
                  ) : (
                    <Component {...pageProps} />
                  )}
                </NextUIProvider>
              </NextThemeProvider>
            )}
        </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
