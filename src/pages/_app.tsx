import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { RecoilRoot } from 'recoil';

/* components */
import { GlobalLoader } from 'app/src/components/GlobalLoader';

/* from app */
import * as analytics from 'app/src/analytics';
import 'app/src/styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [isRouteChanging, setRouteChanging] = useState<boolean>(false);

  const routeChangeStart = () => {
    setRouteChanging(true);
    window.scrollTo(0, 0);
  };

  const routeChangeComplete = () => {
    setRouteChanging(false);
    analytics.pageview({ url: window.location.pathname, title: document.title });
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeComplete);

    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title key="title">title</title>
        <meta key="og:title" property="og:title" content="title" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="title" />
        <meta key="fb:app_id" property="fb:app_id" content="fb_app_id" />
        <meta key="og:description" property="og:description" content="description_here" />
        <meta key="og:url" property="og:url" content={process.env.URL} />
        <meta key="og:image" property="og:image" content={`${process.env.URL}/assets/img/ogp.png`} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:site" name="twitter:site" content="@twitter_name_here" />
        <meta key="description" name="description" content="description_here" />
        <meta key="viewport" name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,shrink-to-fit=no" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>

      <GlobalLoader changing={isRouteChanging} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
