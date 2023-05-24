import { NextUIProvider, useSSR } from '@nextui-org/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const {isBrowser} = useSSR();
  return (
    isBrowser && getLayout(
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    )
  )
}

export default MyApp;
