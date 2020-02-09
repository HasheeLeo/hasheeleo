// import App from 'next/app';
import {AppProps} from 'next/app';

import Head from 'next/head';
import NavBar from '~/components/NavBar';

import '~/styles/style.css';

const App = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <meta name='description' content='The official website of Hashir Ahmad.' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <title>Hashir Ahmad</title>
      <link href='https://fonts.googleapis.com/css?family=Quicksand&display=swap' rel='stylesheet' />
    </Head>
    <header>
      <NavBar />
    </header>
    <main>
      <Component {...pageProps} />
    </main>
  </>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default App;
