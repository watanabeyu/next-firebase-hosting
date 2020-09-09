import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { getStyles } from 'typestyle';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style id="styles-target" dangerouslySetInnerHTML={{ __html: getStyles() }} />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA}`} />
          <script dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA}', {
              page_path: window.location.pathname,
            });
          `,
          }}
          />
        </Head>
        <body>
          <div id="fb-root" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
