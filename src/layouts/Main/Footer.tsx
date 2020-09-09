import React from 'react';
import { style, media } from 'typestyle';

/* components */
import { ExternalLink } from 'app/src/components/ExternalLink';

const styles = {
  container: style(
    {
      textAlign: 'center',
      backgroundColor: '#ccc',
      padding: '90px 0',
      $nest: {
        '> svg': {
          marginBottom: 54,
        },
      },
    },
    media({ maxWidth: 480 }, {
      padding: '60px 0',
      $nest: {
        '> svg': {
          marginBottom: 40,
        },
      },
    }),
  ),
  copy: style(
    {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 0,
    },
  ),
};

export function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.copy}>© 2020 <ExternalLink href="/" analytics={{ category: 'Footer-copyrght' }}>copyright</ExternalLink>, All Rights Reserved</p>
    </footer>
  );
}
