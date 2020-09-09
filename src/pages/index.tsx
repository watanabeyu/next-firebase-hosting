import React from 'react';
import Head from 'next/head';

/* layout */
import { MainLayout } from 'app/src/layouts/Main';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <MainLayout>
        <div className="container">
          <p>index page</p>
        </div>
      </MainLayout>
    </>
  );
}
