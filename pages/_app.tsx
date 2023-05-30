import { NextUIProvider, useSSR } from "@nextui-org/react";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ReactElement, ReactNode } from "react";
import { SessionProvider, useSession } from "next-auth/react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { LoadingComponent } from "@/components/splash/Loading";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type NextPageWithLayout<P = {}, IP = P, auth = boolean> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
  auth?: auth;
};

function Auth({ children: page }: { children: ReactNode }) {
  const { status } = useSession({ required: true });

  console.log(status);
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
          <ReactQueryDevtools initialIsOpen />
          {isBrowser &&
            getLayout(
              <NextUIProvider>
                {Component.auth ? (
                  <Auth>
                    <Component {...pageProps} />
                  </Auth>
                ) : (
                  <Component {...pageProps} />
                )}
              </NextUIProvider>
            )}
        </QueryClientProvider>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
