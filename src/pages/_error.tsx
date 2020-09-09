import React from 'react';
import { NextPageContext } from 'next';

/* error */
import Error404Page from './404';
import Error500Page from './500';

type Props = {
  statusCode: number,
}

function Error(props: Props) {
  if (props.statusCode === 404) {
    return <Error404Page />;
  }

  return <Error500Page />;
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  if (res) {
    return { statusCode: res.statusCode };
  }

  return { statusCode: err ? err.statusCode : 404 };
};

export default Error;
