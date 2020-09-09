import React from 'react';
import Head from 'next/head';

/* layout */
import { MainLayout } from 'app/src/layouts/Main';

/* components */
import { ActiveLink } from 'app/src/components/ActiveLink';

function Error500Page() {
  return (
    <MainLayout className="static">
      <Head>
        <title>INTERNAL SERVER ERROR</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div>
        <h1>INTERNAL SERVER ERROR</h1>
        <div className="error-btn">
          <ActiveLink href="/" className="btn btn-primary">back to top</ActiveLink>
        </div>
      </div>
    </MainLayout>
  );
}

export default Error500Page;
