import React from 'react';
import Head from 'next/head';

/* layout */
import { MainLayout } from 'app/src/layouts/Main';

/* components */
import { ActiveLink } from 'app/src/components/ActiveLink';

function Error404Page() {
  return (
    <MainLayout className="static">
      <Head>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div>
        <h1>PAGE NOT FOUND</h1>
        <div className="error-btn">
          <ActiveLink href="/" className="btn btn-primary">back to top</ActiveLink>
        </div>
      </div>
    </MainLayout>
  );
}

export default Error404Page;
