import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/dist/shared/lib/router/router';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
